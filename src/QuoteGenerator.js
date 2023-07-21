import React, { useState, useEffect } from 'react';
import Quote from './Quote';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

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

    const tweetQuote = () => {
        console.log(quoteData)
        const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteData.text} - ${quoteData.author}`;
        window.open(twitterUrl, '_blank');
    };

    return (
        <div>
            <Quote quote={quoteData.text} author={quoteData.author} />
            <div className="button-group">
                <button className="button-new-quote" onClick={fetchNewQuote}>New Quote</button>
                <button className="button-tweet-quote" onClick={tweetQuote}><FontAwesomeIcon icon={faTwitter} /></button>
            </div>
        </div>
    );
};

export default QuoteGenerator;



