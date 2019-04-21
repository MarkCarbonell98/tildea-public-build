import React from 'react';
import PropTypes from 'prop-types';

const FeedbackWord = props => {
    return (
        <ul className="list-group d-flex flex-row mb-3">
                {props.children}
        </ul>
    )
}

FeedbackWord.propTypes = {
    children: PropTypes.array,
}

export default FeedbackWord;