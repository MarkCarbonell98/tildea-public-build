import React from 'react';
import PropTypes from 'prop-types'

const FeedbackLetter = props => {
    return (
        <li className={(props.className || null) + " display-5 list-group-item  ml-1"}>
                {props.children}
        </li>
    )
}

FeedbackLetter.propTypes = {
    className: PropTypes.string,
    children: PropTypes.string,
}

export default FeedbackLetter;