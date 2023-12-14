import React, { useState, useEffect } from 'react';
import '../css/Processing.css';

function Processing() {
    const [position, setPosition] = useState(-100);

    useEffect(() => {
        let animationFrameId;

        const animate = () => {
            setPosition(prevPosition => (prevPosition < 100 ? prevPosition + 1 : -100));
            animationFrameId = requestAnimationFrame(animate);
        };

        animationFrameId = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrameId);
    }, []);

    const loadingBarStyle = {
        width: '100%',
        height: '20px',
        backgroundColor: '#ddd',
        marginBottom: '10px',
        overflow: 'hidden',
        position: 'relative',
    };

    const loadingBarInnerStyle = {
        position: 'absolute',
        left: `${position}%`,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)',
    };


    return (
        <div className="processing-container" style={{ textAlign: 'center', padding: '20px' }}>
            <div style={loadingBarStyle}>
                <div style={loadingBarInnerStyle}></div>
            </div>
            <p>How are you feeling today?</p>
        </div>
    );
}

export default Processing;
