import React, { Component } from 'react';

class Click extends Component {
    constructor(props) {
        super(props);
        this.state = {num: 5}
        this.randomNumber = this.randomNumber.bind(this);
    }

    randomNumber() {
        let random = Math.floor(Math.random() * 10) + 1
        this.setState({ num:random })
    }

    render() {
        return(
            <div>
                <h1>Your number is: {this.state.num}</h1>
                {this.state.num === 7 ? <img src="https://media.giphy.com/media/3o6fJ1BM7R2EBRDnxK/giphy.gif"></img> : <button className="buton" onClick={this.randomNumber}>Click</button>}
            </div>
        )
    }
}

export default Click;