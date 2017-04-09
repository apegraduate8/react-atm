import React, { Component } from 'react';
import './App.css';
import Button from './Button';




class Checking extends Component {


      constructor(props) {
            super(props);
            this.state = {
                  balance: props.balance,
                  amount: "200.00",
            }
      }

        change() {
            console.log(this.props.balance)
                  // debugger
                  this.setState(function(prev){amount: prev.amount = this.props.balance + ".00" })

        }

        check(){
          console.log(Number.parseInt(this.props.balance))
             if(Number.parseInt(this.state.amount) < 0){return "belowBalance"}

             if(this.state.amount > 0){return "aboveBalance"};

        }



      render() {
            console.log(this.state.balance)

            return (

                  <div className="Check">
                       <h4>checkings </h4>
                      <h2 className={this.check()}> {this.state.amount}</h2>
                      <Button func={this.change.bind(this)} text={ "new balance" } />

                  </div>

            );
      }
}

export default Checking;
