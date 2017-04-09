
import React, { Component } from 'react';
import './App.css';
import Checking from './Checking';
import Saving from './Saving';
import Withdraw from './Withdraw';





class Account extends Component {

  constructor() {
    super();
      this.state = {
        checking: "200.00",
        saving: "120.00",
        withdraw: "0.00",

      }

  }


  add(money) {


     this.setState(function(prev){
       // debugger
      { checking: prev.checking = parseInt(prev.checking) + parseInt(money) }

    })
      this.setState(function(prev){
         { saving: prev.saving = parseInt(prev.saving) + parseInt(money) }
    })
  }


  minus(money) {


     this.setState(function(prev){
         if( parseInt(prev.checking) - parseInt(money) < 0){
            { checking: prev.checking = parseInt(prev.checking) - parseInt(money) - 30}
          }else{
               { checking: prev.checking = parseInt(prev.checking) - parseInt(money) }
          }
    })

        this.setState(function(prev){
         if( parseInt(prev.saving) - parseInt(money) < 0){
           { saving: prev.saving = parseInt(prev.saving) - parseInt(money) - 30 }
         }else {
               { saving: prev.saving = parseInt(prev.saving) - parseInt(money) }
         }
    })
  }

changeChecking(newB, enumer) {
    // debugger
      if(enumer == "+"){
            this.add(newB)
      }else {
        this.minus(newB)
      }

}


  render() {

console.log(this.state.checking)
console.log(this.state.saving)
    return (
      <div className="account">
                <div className="accounts">
                <Checking balance={this.state.checking} />
                <Saving balance={this.state.saving} />
                </div>
                <Withdraw checkBal={this.changeChecking.bind(this)} saveBal={this.state.saving}/>

      </div>
    );
  }
}

export default Account;

//////// added a overdraft fee of $36, when a user withdraws more than they have

