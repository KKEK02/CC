import React from 'react';
import './Home.css';

function Home() {

  const data = [
    { front: 'images/Techevent1.jpeg', back: 'Stay updated on hackathons, coding competitions, tech talks, and workshops designed to enhance skills and spark innovation. These events provide a platform for students to learn, collaborate, and showcase their technical expertise.' },
    { front: 'images/Culturalevent.jpg', back: 'Get notified about music, dance, theater, and art events that celebrate creativity and diversity. Cultural events allow students to showcase their talents and connect with others through artistic expression.' },
    { front: 'images/Games.jpg', back: 'Discover gaming tournaments, esports competitions, and casual gaming challenges. These events offer fun and excitement, fostering a competitive yet friendly environment for gamers to showcase their skills.' },
  ];

  return (
    <div className='home-container'>
      <main className='main-content'>
        <h1 style={{fontSize:'2vw'}}>Dashboard</h1>
        <div className='welcome-block'>
          <div className='welcome-text'>Welcome back "User Name!" <br></br><br></br>
          <div className='welcome-t1'><p>We are excited to ave you back. Camous Companion is filled with lot of updates for you and waiting to provide you the best services to increase your university experience</p></div>
          </div>
          
          <div className='welcome-image'>
            <img src='images/home-profile.jpg' alt='Welcome' />
          </div>
          
        </div>
        <div className='stats'>
          <div className='stats-container'>
            <div className='stats-block' style={{background:'#09FBEB'}}>Total Number of users <br></br><h2 style={{color:'white', fontSize:'3vw', textAlign:'center', marginTop:'0vh'}}>1,23,756</h2></div>
            <div className='stats-block' style={{background:'#FF821C'}}>Total users logged in: <br></br><h2 style={{color:'white', fontSize:'3vw', textAlign:'center', marginTop:'0vh'}}>58,756</h2></div>
          </div>
          <div className='graph-block'>
              <h2 style={{marginLeft:'2vw'}}>Time Spent on Website (in Hours)</h2>
              
              <div className='bar-graph'>
                
                <div className='bar red' style={{ height: '30%' }}><h1>Mon</h1></div>
                <div className='bar purple' style={{ height: '50%'}}><h1>Tue</h1></div>
                <div className='bar green' style={{ height: '70%' }}><h1>Wed</h1></div>
                <div className='bar red' style={{ height: '30%' }}><h1>Thu</h1></div>
                <div className='bar purple' style={{ height: '50%'}}><h1>Fri</h1></div>
                <div className='bar green' style={{ height: '70%' }}><h1>Sat</h1></div>
                <div className='bar purple' style={{ height: '50%'}}><h1>Sun</h1></div>
              </div>
              
            </div>
        </div>
        <div className='features'>
          <div className='about'>
            <h1 style={{fontSize:'2vw', color:'white', marginLeft:'2vw'}}>About Us</h1>
            <div className='about-content'>
              <div >
                <video  autoPlay loop muted className='about-image'>
                    <source src="images/peermatching.mp4" type="video/mp4"/>
                  </video>
              </div>
              <div className='about-text'>
                <p>Campus Companion is a one top solution for all the university students to build a community among yourselves and spread your Network. It is a platform that provides all the necessary information and services to the students. The following are the features the application like Profile Building, Event Updates, Connnect & Chat, Discussion Forum, Resource sharing, Peer Matchng. These Features are explained in detail below &darr;</p>
              </div>
            </div>
          </div>
          <div className='about'>
            <h1 style={{fontSize:'2vw',color:'pink', marginLeft:'2vw'}}>Profile Management</h1>
            <div className='profile-content'>
              <div className='profile-text'>
                <p>Campus Companion allows students to create personalised profiles to showcase their : <br/> &emsp;&rarr; Skills and Talents<br/> &emsp;&rarr; Hobbies and Interests <br/> &emsp;&rarr; Academic Achievements <br/> &emsp;&rarr; Innovative Projects <br/> Peers can explore these profiles to : <br/> &emsp;&rarr; Connect and Network <br/> &emsp;&rarr; Collaborate on Ideas</p>
              </div>
              <div >
                <img src='images/profilebuild.jpg' alt='Profile Management' className='profile-image'/>
              </div>
            </div>
          </div>
          <div className='event'>
            <h1 style={{fontSize:'2vw',color:'pink', marginLeft:'2vw'}}>Event Hub</h1>
            <div className='event-content'>
              <div className='event-text'>
                <p>Campus Companion keeps you informed about all the latest events happening on campus from Technical workshops and cultural events to gaming tournaments, we cover it all stay updated and make the most of every opportunity.</p>
              </div>
              <div className='event-heading'><h1>Technical</h1><h1>Cultural</h1><h1>Gaming</h1></div>
              <div className="flip-container">
                  {data.map((item, index) => (
                  <div key={index} className="flip-card">
                    <div className="flip-card-inner">
                      <div className="flip-card-front">
                          <img src={item.front} alt={`Front ${index + 1}`} />
                      </div>
                      <div className="flip-card-back">
                        <p>{item.back}</p>
                      </div>
                    </div>
                  </div>
                  ))}
              </div>
            </div>
          </div>
          <div className='chat'>
            <h1 style={{fontSize:'2vw', color:'pink', marginLeft:'2vw'}}>Connect & Chat</h1>
            <div className='chat-content'>
              <div >
                <img src='images/peermatch.jpg' alt='Peermatch' className='chat-image' ></img>
              </div>
              <div className='chat-text'>
                {/* <p><div>Campus Companion provides a feature of Peer Matching where you can Connect with the peers of similar interests or choice of your own.</div><br/><div style={{fontSize:'17vh', marginTop:'-22%', marginLeft:'27%', marginBottom:'-7%'}}>&rarr;</div><div>After Connecting with your peers you have a facility to chat with the peer you have connected. </div></p> */}
                <p>
                  <div>Campus Companion provides a feature of Peer Matching where you can Connect with the peers of similar interests or choice of your own.
                  </div>
                  <br/>
                  <div>
                    <img src='images/rightarrow.png' alt='rarrow' style={{alignSelf:'center', width:'11vw', height:'9vh', marginTop:'-4vh'}}></img>
                  </div>
                  <div>
                    After Connecting with your peers you have a facility to chat with the peer you have connected. 
                  </div>
                </p> 
              </div>
              <div>
                <img src='images/chatting.jpg' alt='Peermatch'  className='chat-image'></img>
              </div>
            </div>
          </div>
          <div className='about'>
            <h1 style={{fontSize:'2vw', color:'pink', marginLeft:'2vw'}}>Resource Sharing</h1>
            <div className='rs-content'>
              <div className='event-text'>
                <p>Campus Companion has resource-sharing feature that allows users to seamlessly share and access resources like notes, materials, and files. This fosters collaboration by making valuable content easily available to the community.</p>
              </div>
              <div>
                
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home