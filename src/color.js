import React, { Component } from "react";
import "./style/style.css"

class Color extends Component {

    constructor (props) {
        super(props)
        this.state = {col: "white"};


        this.colorToYellow = this.colorToYellow.bind(this);
        this.colorToTomato = this.colorToTomato.bind(this);
        this.colorToSlat = this.colorToSlat.bind(this);

    }

    colorToYellow() {
        this.setState({col: "Yellow"});
    }

    colorToTomato() {
        this.setState({col: "tomato"});
    }

    colorToSlat() {
        this.setState({col: "slateblue"});
    }

    render() {
        return(
            <div className="backcolor" style={{backgroundColor: this.state.col}}>
                <button className="yellow" onMouseEnter={this.colorToYellow}>Yellow</button>
                <button className="tomato" onMouseEnter={this.colorToTomato}>Tomato</button>
                <button className="Slat" onMouseEnter={this.colorToSlat}>Slatblue</button>
            </div>
        )
    }

}


export default Color;

