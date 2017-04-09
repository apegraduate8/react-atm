import React, { Component } from 'react';
import './App.css';

import Checking from './Checking'
import Button from './Button';



class Withdraw extends Component {



      constructor(props) {
            super(props);
            this.state = {
                  in: undefined,
                  withdraw: undefined,
            }
      }



      tellTheTruth(result) {
          let truth = Number.parseInt(result)
        // debugger
            if (Number.isInteger(truth) && truth > 5000) {
                  this.setState(function(prevState) {
                        { withdraw: prevState.withdraw = "STOP IT :  you do not have that much money" }
                  });

            }

      }

      grabWith(e) {
                  let input = e.target.value

                  if (input.length < 5) {

                        let truth = Number.parseInt(input)
                        this.setState(function(prevState) {
                              let you = this

                              if (truth > 0) {
                                    { withdraw: prevState.withdraw = "$" + input}
                                     { input: prevState.in = input }

                            } else {
                                    // if (Number.isInteger(the)) { real(the) }
                                    { withdraw: prevState.withdraw = "Please input a NUMBER" }
                              }

                        });

                  } else {

                        if (input.length == 5) {

                              this.tellTheTruth(input)
                        }

                  }


            } ////// end of grabWith function

            calculate() {
                  this.props.checkBal(this.state.in, "-")
                  console.log("in the calc function    >>>>>      ", this.state.in)
            }
            calculate2() {
                  this.props.checkBal(this.state.in, "+")
                  console.log("in the calc function    >>>>>      ", this.state.in)
            }






      render() {

            return (
                <div className="withdraw">
                  <h1> Withdraw: { this.state.withdraw } </h1>
                  <input value={ this.state.input } onChange={ (e) =>  this.grabWith(e)  } />
                    <h2>{this.props.reach} </h2>
                     <Button func={this.calculate.bind(this)} text={ "Withdraw amount" } />
                     <Button func={this.calculate2.bind(this)} text={ "deposit amount" } />

                  </div>
            );
      }
}

export default Withdraw;
