import React, { Component } from 'react';
import data from '../assets/data/Game-1-Data';
import Letter from '../components/Letter';
import utils from '../utils/utils';
import Score from '../components/Score';
import GameFeedback from '../components/ScoreBoard';

//variables for controlling color change, just bootstrap classes for now, they could also be implemented as dynamic css classes;
const colorError = 'bg-danger'; //not implemented yet
const colorSuccess = "bg-success"; //not implemented yet
class Game extends Component {
    state = {
        errors: 0,
        progress: 0,
        isGameFinished: false,
        words: data.words.slice(),
        gameHistory: [],
    }
    
    handleMistake = (e, indexClickedLetter) => {
        e.persist();
        utils.classToggle(e,colorError);
        setTimeout(() => {
            this.setState({
                errors: this.state.errors + 1,
                gameHistory: [...this.state.gameHistory, indexClickedLetter],
            })
            utils.classToggle(e,colorError);
        },400)
    }

    handleSuccess = e => {
        const {progress} = this.state
        e.persist();
        utils.classToggle(e,colorSuccess);
        utils.toggleThisWordsAccent(e);
        setTimeout(() => {
            this.setState({
                progress: progress + 1,
                gameHistory: [...this.state.gameHistory, " "],
            })
            if(this.state.progress === this.state.words.length) {
                this.setState({
                    isGameFinished: true,
                })
            }
            utils.classToggle(e,colorSuccess);
            utils.toggleThisWordsAccent(e);
        }, 400);
    }

    renderLetters(word = []) {
        return [...word].map((c, i) => {
            if (i === utils.getAccentIndex(word)) {
                return (
                    <Letter 
                    key={i} 
                    onClick={(e) => {this.handleSuccess(e)}}
                    >
                        {utils.removeAccent(c)}
                    </Letter>
                    )
            }
            return (
                <Letter key={i} onClick={(e) => {this.handleMistake(e,i)}}>{c}</Letter>
            )
        })
    }

    render() {
        //Variables
        const { words, progress, isGameFinished, errors, gameHistory} = this.state;
        const actualWord = words[progress];

        //conditional variables
        const gameTitle = isGameFinished ? 
        "Congratulations! You completed the level!" : 
        "Click the words that should be accented";

        return (
            <div className="bg-light text-center py-5">
                <div className="container py-5">
                    <h1><span className="h1 font-weight-light">{gameTitle}</span></h1>
                    <div className="container h-100 py-5">
                        <div className="py-5">
                            {this.renderLetters(actualWord)}
                        </div>
                        {isGameFinished ?
                            <>
                                <GameFeedback history={gameHistory}/>
                            </>
                        : null}
                    </div>
                    {!isGameFinished ?
                        <Score 
                        score={progress} 
                        mistakes={errors} 
                        wordsRemaining={words.length - progress}
                        >
                        </Score> 
                        :
                        null
                    }
                </div>
            </div>
        )
    }
}

export default Game;