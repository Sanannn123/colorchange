import React, {Component} from "react";


class Random extends Component {

    constructor(props) {
        super(props);
        this.state = {number: 2};
        // this.makeTime();
    }

    makeTime() {
        setInterval(() => {
            let ran = Math.floor(Math.random() * this.props.maxNumber);
            this.setState({ number: ran })
        }, 1000);
    }

    render() {
        return (
            <div>
            <h1>{this.state.number}</h1>
            </div>
        )
    }
}


export default Random;