import React, { useState } from 'react';
import './styles.css';

const Notepad = () => {
    const [text, setText] = useState('');

    const handleChange = (event) => {
        setText(event.target.value);
    };


    return (
        <div className="notepad">
            <h2 className="notes-label">Notes</h2>
            { (
                <>
                <textarea
                className="notepad-textarea"
                value={text}
                onChange={handleChange}               
                />
                </>
            )}

        </div>
    );
};

export default Notepad;