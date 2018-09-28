import React, { Component } from 'react';
import {Badge, Button} from 'reactstrap';

class Contador extends Component {
    
    state = {
        titulo: "Alpha",
        contador: 0,
    }

    incrementarContador = () => {
        this.setState({
            contador: this.state.contador + 1
        });
    }

    validarContador = () => {
        return this.state.contador == 0
        ? 'warning'
        : 'info'
    }

    validarNombreContador = () => {
        return this.state.contador == 0
        ? 'cero'
        : this.state.contador
    }

    render() { 
        return (
        <div>
            <h1>{this.state.titulo}</h1>
            <Badge className="mr-2" color={this.validarContador()}>{this.validarNombreContador()}</Badge>
            <Button onClick={this.incrementarContador} color="success">Incrementar</Button>
        </div>   
        );
    }
}
 
export default Contador;