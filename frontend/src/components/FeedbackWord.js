import React from 'react';
import utils from '../utils/utils';

const FeedbackWord = props => {
    const letters = props.word.split("");
    const clickedLetterIndex = props.history.split("")
    
    const separatedLetter = letters.map( (letter, i) => {
        let styleClass = 'bg-white';
        if (clickedLetterIndex.includes(i.toString())) {
            styleClass = 'bg-danger';
        }
        if ( utils.hasAccent(letter) ) {
            styleClass = 'bg-success';
        }
        return (
            <span className={`${styleClass} px-3 pt-1 pb-3 rounded mx-1 d-inline-block display-4`} key={i}>{letter}</span>    
        )
    })

    return (
        <div className="my-3 h-100">
            {separatedLetter}
        </div>
    )
}

export default FeedbackWord;