import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {start, pause, reset, refresh, newTimer} from "../actions";
const alarm = require("../audio/Twin-bell-alarm-clock-ringing-short.mp3");

class Timer extends Component {
    constructor(props) {
        super(props);
        let timer; // To use as IntervalID
        this.startStop = this.startStop.bind(this);
        this.reset = this.reset.bind(this);
    }

    startStop() {
        let audio = document.getElementById("beep");
        if (!this.props.running && this.props.timeLeft !== '00:00') {
            this.props.start();
            this.timer = setInterval(() => {
                if (this.props.timeLeft !== '00:00')
                    this.props.refresh();
                else {
                    audio.play();
                    setTimeout(() => {
                        audio.pause();
                        audio.currentTime = 0;
                    }, 1000);
                    this.props.newTimer();
                }
            }, 1000)
        } else {
            this.props.pause();
            clearInterval(this.timer);
        }
    }

    reset() {
        let audio = document.getElementById("beep");
        this.props.reset();
        audio.pause();
        audio.currentTime = 0;
        clearInterval(this.timer);
    }

    render() {
        return (
            <div id={"timer"}>
                <h1 id={"timer-label"}>
                {this.props.type.replace(/^(\w)/, (p1) => { // Capitalize
                    return p1.toLocaleUpperCase();
                })}</h1>
                <div id={"time-left"}>
                    {this.props.timeLeft}
                    <audio id={"beep"} src={alarm}></audio>
                </div>
                <button id={"start_stop"} onClick={this.startStop}>Start/Stop</button>
                <button id={"reset"} onClick={this.reset}>Reset</button>
            </div>

        )
    }
}

Timer.propTypes = {
   // prop: PropTypes.<type>.[isRequired],
    timeLeft: PropTypes.string.isRequired,
    running: PropTypes.bool.isRequired,
    start: PropTypes.func.isRequired,
    pause: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
    refresh: PropTypes.func.isRequired,
    newTimer: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
   return {
       ...state,
   }
};

const mapDispatchToProps = (dispatch) => {
   return {
       // func: (arg) => {
       //    dispatch(action(arg))
       //}
       start: () => {
           dispatch(start());
       },
       pause: () => {
           dispatch(pause());
       },
       reset: () => {
           dispatch(reset());
       },
       refresh: () => {
           dispatch(refresh());
       },
       newTimer: () => {
           dispatch(newTimer());
       },
   }
};

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
//export default Timer;
