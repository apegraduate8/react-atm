
import React, { Component } from 'react';
import './App.css';
import Button from './Button';




class Saving extends Component {



      constructor(props) {
            super(props);
            this.state = {
                  balance: props.balance,
                  amount: "120.00",
            }
      }


        change() {
          this.setState(function(prev){balance: prev.amount = this.props.balance + ".00" })
        }

          check(){
          console.log(Number.parseInt(this.props.balance))
          if(Number.parseInt(this.state.amount) < 0){return "belowBalance"};
             if(this.state.amount > 0){return "aboveBalance"};

        }

  render() {
    console.log(this.props)
    return (
      <div className="saving">
                <h4>Savings </h4>
              <h2 className={this.check()}> {this.state.amount}</h2>
            <Button func={this.change.bind(this)} text={ "new balance" } />

      </div>
    );
  }
}

export default Saving;


