import React, { Component } from 'react';

// Javascript
// const HolaMundo = require('./componentes/holamundo.js)

// ES6
//import HolaMundo from './components/holamundo';
//import Tarjeta from './components/Tarjeta';
//import Navbar from './components/NavbarComponent';
//import Contador from './components/ContadorComponent';
import FotografiasComponent from './components/FotografiasComponent';

class App extends Component {

  render() {
    return (
      <div className="container">
        <FotografiasComponent />
      </div>
    );
  }
}

export default App;
