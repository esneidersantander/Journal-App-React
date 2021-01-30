import React from 'react'

export const JournalEntry = () => {
    return (
        <div className="journal__entry pointer"> 
            <div 
                className="journal__entry-picture"
                style={{
                    backgroundSize:'cover',
                    backgroundImage:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi5kU9Isej4OXGm5XJG9mJeSR-SRsXlZ4eBw&usqp=CAU)'
                }}
            >
            </div>
            <div className="journal__entry-body">
                <p className="journal__entry-title"> 
                    Un nuevo dia
                </p>
                <p className="journal__entry-content"> 
                    Un nuevo diaadsasdas asdasdasd asdasdasd qweqwegdfgdf sdfsdgf
                </p>
            </div>
            <div className="journal__entry-date-box">
                <span>Monday</span>
                <h4>25</h4>
            </div>
        </div>
    )
}
