import React, {Component} from 'react';
import data from '../assets/data/Game-3-Data';
import Score from '../components/Score';
import utils from '../utils/utils';
import ShuffleBoardConstructor from '../components/ShuffleBoardConstructor'
// import CompleteWordFeedback from '../components/CompleteWordFeedback';


const colorSuccess = "bg-success";
const colorDanger = "bg-danger";
class Game3 extends Component {
    state = {
        words: Object.assign(data),
        progress: 0,
        errors: 0,
        difficultyIndex: 0,
        difficulties: Object.keys(data),
        isComplete: false,
        triggerShuffle: true,
        shuffleCount: 0,
        errorHistory: [],
        actualErrors: [],
    }

    handleSuccess = e => {
        const {words, progress, difficulties, difficultyIndex} = this.state;
        const ammountOfWordsInTheActualDifficultyLevel = words[difficulties[difficultyIndex]].length-1;
        e.persist();
        utils.classToggle(e, colorSuccess);
        setTimeout(() => {
            if(progress === ammountOfWordsInTheActualDifficultyLevel) {
                if(difficulties[difficulties.length-1] === difficulties[difficultyIndex]) {
                    this.setState({
                        isComplete: true,
                    })
                }
                this.setState({
                    difficultyIndex: difficultyIndex + 1,
                    progress: 0,
                })
            }
            this.setState({
                progress: this.state.progress+1,
                triggerShuffle: true,
                shuffleCount: 0,
                errorHistory: this.state.errorHistory.concat(this.state.actualErrors),
                actualErrors: [],
            });
            utils.classToggle(e, colorSuccess);
        }, 400)
    }

    handleError = e => {
        const {actualErrors, words, difficulties, difficultyIndex, progress,errors, shuffleCount} = this.state;
        e.persist();
        utils.classToggle(e,colorDanger);
        const newErrors = actualErrors.concat({
            incorrectWords: actualErrors.concat(e.target.textContent),
            correctWord: words[difficulties[difficultyIndex]][progress][0],
        })

        console.log(newErrors);
        setTimeout(() => {
            this.setState({
                errors: errors + 1,
                triggerShuffle: false,
                shuffleCount: shuffleCount+1,
                actualErrors: newErrors,
            })
            utils.classToggle(e,colorDanger);
        },400)
    }

    render() {
        const {words, progress, isComplete, errors, difficulties, difficultyIndex,triggerShuffle, shuffleCount,errorHistory} = this.state;
        console.log(errorHistory);
        return (
            <>
                <h1 className="font-weight-light text-center mt-5">{!isComplete ? "Click the correct word! ( if you can :P )" : "Congratulations, you have completed the level!"}</h1>
                <div className="container">
                    {
                        !isComplete ? 
                        <ShuffleBoardConstructor
                        option={words[difficulties[difficultyIndex]][progress] || []}
                        handleSuccess={this.handleSuccess}
                        handleError={this.handleError}
                        triggerShuffle={triggerShuffle}
                        shuffleCount={shuffleCount}
                        >
                        </ShuffleBoardConstructor>
                        : 
                        null
                    }
                    
                    {/* {
                        !isComplete ?
                        null
                        :
                        <CompleteWordFeedback
                        history={errorHistory}
                        >
                        </CompleteWordFeedback>
                    } */}

                </div>
                    {
                        !isComplete ?
                        <Score
                        score={progress || 0}
                        mistakes={errors || 0}
                        wordsRemaining={words[difficulties[difficultyIndex]].length - progress}
                        >
                        </Score> 
                        : 
                        null
                    }

            </>
        )
    }
}

export default Game3;