import React from 'react'

export const JournalEntry = () => {
    return (
        <div className="journal__entry pointer">
            <div 
                className="journal__entry-picture"
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://i.blogs.es/aa1b9a/luna-100mpx/450_1000.jpg)'
                }} //en react es un objeto
            ></div>
            <div className="journal__entry-body">
                <p className="journal_entry-title">
                    un nuevo dia 
                </p>
                <p className="journal_entry-content">
                    loremp ipsum 
                </p>
            </div>
            <div className="journal_entry-date-box">
                <span>Monday</span>
                <h4>28</h4>
            </div>
        </div>
    )
}
