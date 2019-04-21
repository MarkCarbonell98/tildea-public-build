import React, { Component } from 'react';
import data from '../assets/data/Game-3-Data';
import Score from '../components/Score';
import utils from '../utils/utils';
import ShuffleBoardConstructor from '../components/ShuffleBoardConstructor';

const colorSuccess = 'bg-success';
const colorDanger = 'bg-danger';
class Game3 extends Component {
	state = {
		words: Object.assign(data),
		progress: 0,
		errors: 0,
		difficultyIndex: 0,
		difficulties: Object.keys(data),
		isComplete: false,
		triggerShuffle: true,
	};

	handleSuccess = (e) => {
		e.persist();
		utils.classToggle(e, colorSuccess);
		setTimeout(() => {
			this.setState({
				progress: this.state.progress + 1,
				triggerShuffle: true,
			});
			const { words, progress, difficulties, difficultyIndex } = this.state;
			const ammountOfWordsInTheActualDifficultyLevel = words[difficulties[difficultyIndex]].length;
			if (progress === ammountOfWordsInTheActualDifficultyLevel) {
				if(difficulties[difficulties.length - 1] === difficulties[difficultyIndex]) {
					this.setState({
						isComplete: true,
					})
				} else {
					this.setState({
						difficultyIndex: difficultyIndex + 1,
						progress: 0
					});
				}
			}
			
			utils.classToggle(e, colorSuccess);
		}, 400);
	};

	handleError = (e) => {
		e.persist();
		utils.classToggle(e, colorDanger);
		setTimeout(() => {
			this.setState({
				errors: this.state.errors + 1,
				triggerShuffle: false,
			});
			utils.classToggle(e, colorDanger);
		}, 400);
	};

	render() {
		const {
			words,
			progress,
			isComplete,
			errors,
			difficulties,
			difficultyIndex,
			triggerShuffle,
		} = this.state;

		return (
			<div>
				<div className="p-3 text-center my-5 shadow">
					{!isComplete ? (
						<h1>Click the correct word! (if you can :P)</h1>
						) : (
						<h1>Congratulations! You completed the level!</h1>
					)}
				</div>
				<div className="container">
					{
						!isComplete && 
						<ShuffleBoardConstructor
						option={words[difficulties[difficultyIndex]][progress] || []}
						handleSuccess={this.handleSuccess}
						handleError={this.handleError}
						triggerShuffle={triggerShuffle}
						/>
						
					}
				</div>
				<Score
					// TODO: progress only reflex the progress in the actual dificulty level
					score={progress}
					mistakes={errors}
					//  TODO: only relfex the words remaining in the actual dificulty level
					wordsRemaining={words[difficulties[difficultyIndex]].length - progress}
				/>
			</div>
		);
	}
}

export default Game3;
