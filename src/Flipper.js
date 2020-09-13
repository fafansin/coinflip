import React, {Component} from 'react';
import Coin from "./Coin";
import './Flipper.css';

class Flipper extends Component{
    static defaultProps = {
        faces: ['heads.jpg', 'tails.jpg']
    }
    constructor(props){
        super(props);
        this.state = {
            flips:0,
            heads:0,
            tails:0,
            face:null
        }
        this.handleFlip = this.handleFlip.bind(this);
    }
    flippingAction(){
        this.setState(function(currentState){
            let indx = Math.floor(Math.random() * 2);
            return {
                flips: currentState.flips + 1,
                heads: indx === 0 ? currentState.heads + 1 : currentState.heads,
                tails: indx === 1 ? currentState.tails + 1 : currentState.tails,
                face: this.props.faces[indx],
                }
        })
    }
    handleFlip(){
        this.flippingAction();
    }
    render(){
        return (
            <div className="Flipper">
                <Coin face={this.state.face} />
                <button onClick={this.handleFlip}>Flip Me!</button>
                <p>{`Out of ${this.state.flips} flips, there have been ${this.state.heads} heads and ${this.state.tails} tails.`}</p>
            </div>
            
        )
    }
}

export default Flipper;