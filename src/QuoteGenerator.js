import React, { useState, useEffect } from 'react';
import Quote from './Quote';

const QuoteGenerator = () => {
    const [quoteData, setQuoteData] = useState({});

    useEffect(() => {
        fetchNewQuote();
    }, []);

    const fetchNewQuote = () => {
        fetch('https://type.fit/api/quotes?ref=hackernoon.com')
            .then(response => response.json())
            .then(data => {
                const randomIndex = Math.floor(Math.random() * data.length);
                console.log(data[randomIndex]);
                setQuoteData(data[randomIndex]);
            })
            .catch(err => console.error(err));
    };

    return (
        <div>
            <Quote quote={quoteData.text} author={quoteData.author} />
            <div className="button-group">
                <button className="button-new-quote" onClick={fetchNewQuote}>New Quote</button>
            </div>
        </div>
    );
};

export default QuoteGenerator;



