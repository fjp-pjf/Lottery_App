import React, { Component } from 'react';
import Ball from './Ball';
import './Lottery.css';

class Lottery extends Component {
    static defaultProps = {
            title: 'Lotto',
            maxNum: 40,
            numBall: 6
    }
    constructor(props){
        super(props);
        this.state = {
            num: Array.from({length: this.props.numBall})
        }
        this.handleClick = this.handleClick.bind(this);
    }
    generate(){
        this.setState(curState=> ({
            num: curState.num.map(n=>Math.floor(Math.random() * this.props.maxNum) + 1)
        }));
    }
    handleClick(){
        this.generate();
    }
    render(){
        return(
            <section className="Lottery">
                <h1>{this.props.title}</h1>
                <div>
                    {this.state.num.map(n=> <Ball num={n}/> )}
                </div>
                <button onClick={this.handleClick}>Generate Lotto</button>
            </section>
        );
    }
}

export default Lottery;