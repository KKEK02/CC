import React from "react";
import './Header.css';
import { useNavigate } from "react-router-dom";

function Header({ toggleSidebar }){
    const navigate = useNavigate();
    return(
        <div className="header">
            <div className="head">
                <div className="heading">   
                    <button id="btn"   style={{ background: 'transparent', color: 'white',borderRadius:'2vh',paddingBottom: '7vh',  height: '7vh', width: '4vw',  marginTop:'6vh', marginLeft:'1vw',   fontSize:'5vh', cursor: 'pointer', 

                                    }}
                        onClick={toggleSidebar}>
                        ☰
                    </button>
                    <img className="logo" src="images/CClogo.png" alt="Loading"></img>
                    <h4 id="header-cc">Campus Companion</h4>
                    <div className="right">
                        <img className="profile" src="images/Profile.png" alt="Profile"></img>
                        <img className="logout" src="images/Logout.png" alt="Logout" onClick={() => navigate('/')}></img>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;