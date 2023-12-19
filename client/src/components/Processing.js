import React, { useState, useEffect } from 'react';

// function using Animation to create a colorful moving bar

function Processing() {
    // set position using state
    const [position, setPosition] = useState(-100);
    // set up effect
    useEffect(() => {
        let animationFrameId;
        // define animation
        const animate = () => {
            setPosition(prevPosition => (prevPosition < 100 ? prevPosition + 1 : -100));
            animationFrameId = requestAnimationFrame(animate);
        };
        // store id and use it appropriately
        animationFrameId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrameId);
    }, []);
    // css styles for the bar
    const loadingBarStyle = {
        width: '60%',
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
        background: 'linear-gradient(to right, lightpink, pink, hotpink)',
    };

    return (
        <div className="processing-container" style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '20px',
            width: '100%',
        }}>
            <div style={loadingBarStyle}>
                <div style={loadingBarInnerStyle}></div>
            </div>
        </div>
    );
}

export default Processing;
