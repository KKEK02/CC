import React, { useState } from 'react';
import './Event.css'; // Make sure to create and style this CSS file

const events = [
    {
        id: 1,
        title: 'Event 1',
        description: 'Details about Event 1',
        imageUrl: 'images/KLevent.png',
    },
    {
        id: 2,
        title: 'Event 2',
        description: 'Details about Event 2',
        imageUrl: 'images/DD.jpg',
    },
    {
        id: 3,
        title: 'Event 2',
        description: 'Details about Event 2',
        imageUrl: 'images/event3.jpg',
    },
    {
        id: 4,
        title: 'Event 2',
        description: 'Details about Event 2',
        imageUrl: 'images/event4.jpg',
    },
    {
        id: 5,
        title: 'Event 2',
        description: 'Details about Event 2',
        imageUrl: 'images/event5.jpg',
    },
    {
        id: 6,
        title: 'Event 2',
        description: 'Details about Event 2',
        imageUrl: 'images/VRevent.jpg',
    },
    {
        id: 6,
        title: 'Event 2',
        description: 'Details about Event 2',
        imageUrl: 'images/KLevent.png',
    },
    {
        id: 6,
        title: 'Event 2',
        description: 'Details about Event 2',
        imageUrl: 'images/event3.jpg',
    },
    {
        id: 6,
        title: 'Event 2',
        description: 'Details about Event 2',
        imageUrl: 'images/DD.jpg',
    },
    {
        id: 6,
        title: 'Event 2',
        description: 'Details about Event 2',
        imageUrl: 'images/event5.jpg',
    },
    // Add more events as needed
];

const Event = () => {
    const [selectedEvent, setSelectedEvent] = useState(null);
    
    const handleImageClick = (event) => {
        setSelectedEvent(event);
    };

    const handleBackClick = () => {
        setSelectedEvent(null);
    };

    return (
        <div className="event-container">
            {!selectedEvent ? (
                <>
                    <div className='event-c1'>
                        <h1>Events</h1>
                        <img id='event-btn'  src='images/NewEvent.png' alt='new event'></img>
                    </div>
                
                    <div className="event-grid">
                        
                        {events.map((event) => (
                            <div key={event.id} className="event-item" onClick={() => handleImageClick(event)}>
                                <img src={event.imageUrl} alt={event.title} className="event-image" />
                            </div>
                        ))}
                    </div>
                </>
                
                ) : (
                        <div className="event-details">
                            <div >
                                <img src='/images/LeftArrow.png' alt='back' className="back-button" onClick={handleBackClick}></img>
                            </div>
                            {/* <div className="event-details-content"> */}
                                <div className="event-details-text">
                                    <h2>{selectedEvent.title}</h2>
                                    <p>{selectedEvent.description}</p>
                                </div>
                                <div className="event-details-image">
                                    <img src={selectedEvent.imageUrl} alt={selectedEvent.title} />
                                </div>
                            {/* </div> */}
                        </div>
                    )}
                
            
        </div>
                
    );
};

export default Event;