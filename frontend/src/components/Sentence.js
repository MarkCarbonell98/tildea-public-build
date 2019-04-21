import React from "react";

const Option = props => (
    <div className="p-3 m-5 bg-light shadow rounded text-center">
        <h2 className="font-weight-light">
            {props.sentence}
        </h2>
    </div>  
);

export default Option;
