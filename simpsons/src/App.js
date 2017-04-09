import React, { Component } from 'react';

import Account from './Account';
import Withdraw from './Withdraw';

import './App.css';

class App extends Component {

      // constructor() {
      //       super();
      //       this.state = {
      //             a: new Account(),
      //             w: 3,
      //             c: "why",
      //             d: "200.00"

      //       }

      // }
      // show(){
      //   this.setState(function(aa) {
      //         let tina = new Withdraw();
      //       {c: tina.state.withdraw}
      //       console.log(tina.state)
      //   })
      /// }
      ///////
      /////// was trying a lot of things lol


      render() {

            return (
             <div className = "App" >
                  <h2 className="instructions">
                  to make a transcation<br />
                   input the $ amount <br />
                    then click either<br />
                     the withdraw or deposit button. <br />
                   then click "new balance" button on either account to complete the transaction <br />
                   ******<span className="instructions-span"> must repeat instructions above to complete another transaction </span> *****
                  </h2>
                  <Account />
               </div>
            );
      }
}


export default App;
