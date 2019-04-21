import React from 'react'
import FeedbackWord from "./FeedbackWord"
import data from '../assets/data/Game-1-Data';

const GameFeedback = (props) => {
    // before [2, 5, 6, " ", 2, 6, " "]
    const historyForEachWord = props.history.join("").split(" ")
    // after ["256", "26"]
    const FeedbackWords = data.words.map( (word, i) => 
        <FeedbackWord word={word} history={historyForEachWord[i]} key={i}/>
    );
    return (
        <>
            {FeedbackWords}
        </>
    )
}

export default GameFeedback;