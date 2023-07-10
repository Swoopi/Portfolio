import React from 'react';
import './resume.css';


const resume = () => {
    return (
        <div className="resume-container">
            <embed
                src="Dylan-Farrell-Resume.pdf"
                type="application/pdf"
                style={{minWidth: '100%', minHeight: '100vh' }}
                />
        </div>
    );
};

export default resume;
    