import React, { Component } from 'react';
import Componente from './components/Componente'; 

class App extends Component {
  render() {
    return (
      <div>
          <h1>Soy el componente App</h1>
          <h2>Mostrando a continuación otro componente...</h2>
          <Componente />
      </div>
    );
  }
}

export default App;
