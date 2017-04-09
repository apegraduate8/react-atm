
import React, { Component } from 'react';
import './App.css';




class Button extends Component {


      constructor() {
            super();
            this.state = {
                  balance: 0.00,
                  deposti: 0.00,
                  withdraw: 0.00
            }
      }



      render() {
            return (
              <div>
                    <button onClick={this.props.func}> {this.props.text} </button>
                </div>
            );
      }
}

export default Button;

