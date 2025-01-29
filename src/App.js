
import './App.css';
import { useState } from 'react';
import Login from './components/login/Login';
import SideBar from './components/sidebar/SideBar';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Event from './components/events/Event';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="*" element={
                  <div className="Body">
                    <Header toggleSidebar={toggleSidebar} />
                    <SideBar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
                    <main>
                        <Routes>
                          <Route path="/home" element={<Home/>} />
                          <Route path="/event" element={<Event/>} />
                        </Routes>
                    </main>
                  </div>
              } />
      </Routes>       
    </Router>
  );
}

export default App;
