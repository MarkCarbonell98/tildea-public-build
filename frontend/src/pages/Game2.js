import React, { Component } from "react";
import data from "../assets/data/Game-2-Data";
import Sentence from '../components/Sentence';
import Option from "../components/Option";
import Score from "../components/Score";

const successClass = 'bg-success';
const errorClass = 'bg-danger';

class Game2 extends Component {
    state = {
      data: data,
      success: 0,
      progress: 0,
      error: 0,
      disabled: false,
      next: false
    }

    increment = (stateKey) => {
      let temp = this.state[stateKey];
      temp++;
      this.setState({[stateKey]: temp})
    }
    
    handleError = (e) => {
      e.persist();
      this.increment('error');
      this.toggleDisabled();
      this.classToggle(e, errorClass);
      this.setState({next: true});
    }
    
    handleSuccess = (e) => {
      e.persist();
      this.increment('success');
      this.toggleDisabled();
      this.classToggle(e, successClass);
      setTimeout( () => {
        this.handleProgress();
      }, 500)
    }

    handleProgress = () => {
      if (this.state.progress < this.state.data.length) {
        this.increment('progress');
      }
      this.toggleDisabled();
      this.buttonClassRemove(successClass);
      this.buttonClassRemove(errorClass);
      this.setState({next: false});
    }

    toggleDisabled = () => {
      const disabled = !this.state.disabled;
      this.setState({disabled});
    }

    classToggle = (e, className) => {
      e.target.classList.toggle(className);
    }

    buttonClassRemove = (className) => {
      const element = document.querySelector('button.' + className);
      if (element) element.classList.remove(className);
    }
    
    render() {
        const {data, success, error, progress} = this.state;
        const nextBtn = this.state.next ?
          <button onClick={this.handleProgress} className="btn btn-lg btn-secondary">Next</button>
         : null;

        const Game = progress < data.length ? (
          <div>
            <Sentence sentence={data[progress].sentence} />
              <div className="row py-5 my-5">
                <div className="col-md-6 d-flex align-items-center justify-content-center border-right">
                  <Option
                    click={this.handleSuccess}
                    disabled={this.state.disabled}
                    option={data[progress].correct}
                  />
                </div>
                <div className="col-md-6 d-flex align-items-center justify-content-center">
                  <Option
                    click={this.handleError}
                    disabled={this.state.disabled}
                    option={data[progress].incorrect}
                  />
                </div>
              </div>
              <div className="p-3 mt-3 mb-5 text-center" style={{height: '3rem'}}>
                {nextBtn}
              </div>
          </div>

        ) : (
          <div className="p-3 text-center my-5 shadow">
            <h1>SVENJA IST DIE SCHÖNSTE FRAU DER WELT!</h1>
          </div>
        );

        return (
          <div>
            <div className="container">
              {Game}
              <Score
                score={success}
                mistakes={error}
                wordsRemaining={data.length - progress}
              />
            </div>
          </div>
        );
    }
}

export default Game2;