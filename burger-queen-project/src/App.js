import React, { Component } from "react";
import logo from "./img/logo.png" 
import "./App.css"
//import { Button } from 'reactstrap';


 export default class Home extends Component {

  render() {
    return (
      <div>
   <img className="logo" src={logo} alt="logoBQ"/>
   <button type="button" className="start" onClick={this.onClick}>Inicio</button>
   </div>
    );
  }
}

// class SecondScreen extends Component {

//   render() {
//     return (
//       <div>
//    <button className="cashier1">Caja 1</button>
//    <button className="cashier2">Caja 2</button>
//    <button className="kitchen">Cocina</button>
//    </div>
//     );
//   }
// }







// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
