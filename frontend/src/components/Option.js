import React from "react";

const Option = props => (
    <div
        onClick={props.click}
        className="px-5 py-3 display-4 rounded shadow"
    >
        {props.option}
    </div>
);

export default Option;