import React from 'react';
import Option from './Option';
import utils from '../utils/utils';

const ShuffleBoardConstructor = ({ option, handleSuccess, handleError, triggerShuffle, shuffleCount }) => {
	const allOptions = option.map((c, i) => {
		// ? The fist element is the correct one
		if (i === 0) {
			return <Option key={c + i} option={option[i]} click={handleSuccess} />;
		} else {
			return <Option key={c + i} option={option[i]} click={handleError} />;
		}
	});

	//TODO: this part of the component doesn't work properly yet, we have to develop a way to make him shuffle only when a correct component is clicked, and then inmmediately change this property, so that it doesn't update again.
	const decideShuffle = shuffleCount === 0 && triggerShuffle;
	const allShuffledOptions = decideShuffle ? utils.fisherYatesShuffle(allOptions) : allOptions;

	const allStyledOptions = allShuffledOptions.map((c, i, a) => {
		const divClass = i === 0 && a.length % 2 === 1 ? 'col-md-12' : 'col-md-6 mt-5';
		return (
			<div key={i} className={`${divClass} d-flex align-items-center justify-content-center`}>
				{c}
			</div>
		);
	});

	return <div className="py-5 my-5 row">{allStyledOptions}</div>;
};

export default ShuffleBoardConstructor;
