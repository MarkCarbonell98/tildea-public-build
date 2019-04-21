import React from 'react';
import PropTypes from 'prop-types';

const Letter = props => {
    return (
            <span 
                className="display-1 text-center px-3 pb-3 d-inline-block"
                style={{cursor: 'pointer',}} 
                id="letter" 
                onClick={props.onClick}>
                {props.children}
            </span>
    )
}

Letter.propTypes = {
    accent: PropTypes.string,
    value: PropTypes.string,
    onClick: PropTypes.func,
}

export default Letter;