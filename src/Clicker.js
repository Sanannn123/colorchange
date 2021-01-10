import React, {Component} from "react";


class Clicker extends Component {

    constructor(props) {
        super(props);
        this.state = { score:0 };
        this.singleScore = this.singleScore.bind(this);
        this.tripleScore = this.tripleScore.bind(this);
    }

    singleScore (){
        this.setState( { score: this.state.score + 1 } )
    }

    tripleScore() {
        this.setState(currState => {
            return {score: currState.score + 1 }
        }) 
        this.setState(currState => {
            return { score: currState.score + 1 }
        }) 
        this.setState(currState => {
            return { score: currState.score + 1 }
        }) 
    }

    render() {
        return (
            <div>
                <h1>Score is: {this.state.score}</h1>
                <button onClick={this.singleScore}>+1</button>
                <button onClick={this.tripleScore}>+3</button>
            </div>
        )
    }
}

export default Clicker; 