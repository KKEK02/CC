import React from 'react';
import './SideBar.css';
import { useNavigate } from 'react-router-dom';

const SideBar = ({ isOpen, toggleSidebar }) => {
    const navigate = useNavigate();
    const pages = [
        {id:0, name:'Dashboard', icon:'images/Home.jpg', link:"/home" },
        {id:1, name:'Timetable', icon:'images/Timetable.jpg', link:"/profile" },
        {id:2, name:'Material', icon:'images/syllabus.jpg', link:"/about" },
        {id:3, name:'Calendar', icon:'images/Calendar.jpg', link:"/about" },
        {id:4, name:'Events', icon:'images/event.png', link:"/event" },
        {id:4, name:'Chats', icon:'images/chat.png', link:"/about" },
        {id:4, name:'Discussions', icon:'images/Discussion.jpg', link:"/about" },
    ];
  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`} id='sidebar'>
        <div className='elements'>
          <div className="pages">
            {
              pages.map(page => (
                <div key={page.id} className='element' onClick={()=>{navigate(page.link)}}>
                  <img src={page.icon} alt=""/>
                  <p>{page.name}</p>
                </div>
              ))
            }
          </div>
        </div>
    </div>
    
  )
}

export default SideBar