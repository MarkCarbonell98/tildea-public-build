import React from 'react';
import Option from './Option';
import utils from '../utils/utils';

const ShuffleBoardConstructor = ({option = [], handleSuccess, handleError, triggerShuffle, shuffleCount}) => {
    const allOptions = option.map((c,i) => {
        if(i === 0) {
            return (
                <Option key={c + i}
                option={option[i]}
                click={handleSuccess}
                >
                </Option>
            )
        } else {
            return (
                <Option key={c + i}
                option={option[i]}
                click={handleError}
                >
                </Option>
            )
        }
    })

    const decideShuffle = shuffleCount === 0 && triggerShuffle ? true : shuffleCount > 0 && triggerShuffle ? true : false;

    const allShuffledOptions = decideShuffle ? utils.fisherYatesShuffle(allOptions) : allOptions;

    const allStyledOptions = allShuffledOptions.map((c,i,a) => {
        const divClass = i === 0 && a.length % 2 === 1 ? 'col-md-12' : 'col-md-6 mt-5';
        return (
            <div key={i} className={`${divClass} d-flex align-items-center justify-content-center`}>
                {c}
            </div>
        )
    }) 

    return (
        <div className="py-5 my-5 row">
            {allStyledOptions}
        </div>
    )
}

export default ShuffleBoardConstructor;