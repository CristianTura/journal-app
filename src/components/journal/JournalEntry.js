import React from 'react'

const JournalEntry = () => {
    return (
        <div className='journal__entry'>

            <div 
                className='journal__entry-picture'
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://i.pinimg.com/originals/24/fb/2e/24fb2eebe8e53f5b730508afd283390a.jpg)'
                }}
            ></div>

            <div className='journal__entry-body'>
                <p className='journal__entry-title'>
                    Un nuevo día
                </p>
                <p className='journal__entry-content'>
                    Lorem ipsum dolor sit amet.
                </p>
            </div>

            <div className='journal__entry-date-box'>
                <span>Monday</span>
                <h4>28</h4>
            </div>
            
        </div>
    )
}

export default JournalEntry
