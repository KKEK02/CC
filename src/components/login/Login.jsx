import React, { useState } from 'react';
import './Login.css';
import {auth} from '../../config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { sendPasswordResetEmail } from 'firebase/auth';
import AlertBox from '../alertbox/AlertBox';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [alert, setAlert] = useState({ show: false, message: "", type: "" });
    const [view, setView] = useState("login");
    ///const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleBackToLogin = () => {
        setView("login");
    };

    const handleForgotPassword = () => {  
        setView("forgotPassword");
    };

    const forgotPassword = async(e) => {
        e.preventDefault();

        try{
            await sendPasswordResetEmail(auth, email);
            setAlert({ show: true, message: "Password reset link sent!", type: "success" }); 
            
        }catch(error){
            switch(error.code){
                case "auth/user-not-found":
                    setAlert({ show: true, message: "No user found", type: "error" });break;
                case "auth/invalid-email":
                    setAlert({ show: true, message: "Invalid email format.", type: "error" });break;
                case "auth/too-many-requests":
                    setAlert({ show: true, message: "Too many requests. Please try again later.", type: "error" });break;
                case "auth/network-request-failed":
                    setAlert({ show: true, message: "Please check your Internet Connection.", type: "error" });break;
                default:
                    setAlert({ show: true, message: "Failed to send reset link.", type: "error" });break;

            }
               
        }
    }

    const signIn = async(e) => {
        e.preventDefault();
        try{
            const user = await signInWithEmailAndPassword(auth, email, password);
            console.log(user);
            if(user){
                setAlert({ show: true, message: "Successfully logged in!", type: "success" });
                setTimeout(() => {
                    navigate("/home"); // Navigate to the next page after 3 seconds
                  }, 4000);
            }
        }catch(err){
            setAlert({ show: true, message: "Invalid username or password.", type: "err" });
        }
    };

    /*
       const handleResetPassword = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      setAlert({ show: true, message: "Password reset email sent!", type: "success" });
    } catch (error) {
      setAlert({ show: true, message: "Failed to send reset email.", type: "error" });
    }
  };

    /*const history = useHistory();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password);
            history.push('/nextPage'); // Replace with your next page route
        } catch (error) {
            console.error("Error logging in: ", error);
            alert("Invalid username or password");
        }
    }; */

    return (
        <div className='login-container'>
            <header>
                <p>{view === "login" ? "Login Page" : "Reset Password"}</p>
            </header>
            <div className='c1'>

                <div><img id='logo'  src='images/CClogo.png' alt='logo'></img></div>
            
                <div  className='c2'>
                    {view === "login" ? (
                        <div>
                            <h2>Campus Companion</h2>
                            <form onSubmit={signIn}> 
                                <div>
                                    <label>UserName:</label><br/>
                                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Your UserName here' required />
                                </div>
                                <div>
                                    <br/><label>Password:</label><br/>
                                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter Your Password here' required />
                                </div>
                                <br/>
                                <button id='login-btn'>Login</button><br/>
                                <p onClick={handleForgotPassword}>Forgot Your Password?</p>
                            
                            </form>
                        </div>
                    ) : (
                        <div>
                            <h2>Reset Password</h2>
                            <form>
                                <div>
                                    <label>Email:</label><br/>
                                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Your Email here' required />
                                </div>
                                <br/>
                                <button id='login-btn'  onClick={forgotPassword}>Send Link</button><br/>
                                <p onClick={handleBackToLogin}>Back to Login</p>
                            </form>
                        </div>
                    )}
                </div>
            </div>

            {alert.show && (
                <AlertBox
                    message={alert.message}
                    type={alert.type}
                    onComplete={() => setAlert({ show: false, message: "", type: "" })}
                />
            )}

        </div>
    );
};
export default Login;
