import React, {Component} from 'react';
import "./Coin.css";

class Coin extends Component{
    render(){
        const img = this.props.face && <img src={this.props.face} alt="Coin"/>
        return (
            <div className="Coin">
                {img}
            </div>
            
        )
    }
}

export default Coin;