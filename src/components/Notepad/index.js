import React, { useState } from 'react';
import './styles.css';

const Notepad = () => {
    const [text, setText] = useState('');
    const [isMinimized, setIsMinimized] = useState(true);

    const handleChange = (event) => {
        setText(event.target.value);
    };

    const toggleMinimize = () => {
        setIsMinimized(!isMinimized);
    };

    return (
        <div className="notepad">
            <button onClick={toggleMinimize} className="minimize-button">
                {isMinimized ? 'Notepad' : '-'}
            </button>

            {!isMinimized && (
                <>
                <textarea
                className="notepad-textarea"
                value={text}
                onChange={handleChange}
                placeholder="Write any notes here..."
                />
                </>
            )}

        </div>
    );
};

export default Notepad;