import React from 'react';

const Quote = ({ quote, author }) => {
    return (
        <div className="quote-box">
            <h1 className="title">Quote of the day:</h1>
            <p className="quote-text">"{quote}"</p>
            <p className="quote-author">- {author || "Unknown"}</p>
        </div>
    );
};

export default Quote;

