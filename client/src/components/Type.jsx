import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {decrement, increment} from "../actions";

class Type extends Component {
    constructor(props) {
        super(props);
        this.handleInc = this.handleInc.bind(this);
        this.handleDec = this.handleDec.bind(this);
    }

    handleInc() {
        this.props.increment(this.props.name);
    }

    handleDec() {
        this.props.decrement(this.props.name);
    }

    render() {
        return (
            <div id={this.props.name}>
                <h1 id={this.props.name + "-label"}>
                    {this.props.name.replace(/^(\w)/, (p1) => { // Capitalize
                        return p1.toLocaleUpperCase();
                    })}</h1>
                <div className={"time-select"}>
                    <button id={this.props.name + "-increment"} onClick={this.handleInc}>+</button>
                    <p id={this.props.name + "-length"}>
                        {(this.props.name === 'session' ? this.props.session : this.props.break)}</p>
                    <button id={this.props.name + "-decrement"} onClick={this.handleDec}>-</button>
                </div>
            </div>
        )
    }
}

Type.propTypes = {
   // prop: PropTypes.<type>.[isRequired],
    name: PropTypes.string.isRequired,
    break: PropTypes.number.isRequired,
    session: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
   return {
       break: state.break,
       session: state.session
   }
};

const mapDispatchToProps = (dispatch) => {
   return {
       // func: (arg) => {
       //    dispatch(action(arg))
       //}
       increment: (type) => {
           dispatch(increment(type));
       },
       decrement: (type) => {
           dispatch(decrement(type));
       },
   }
};

export default connect(mapStateToProps, mapDispatchToProps)(Type);
