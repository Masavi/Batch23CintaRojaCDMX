import React, { Component } from 'react';
import Fotografia from './FotografiaComponent';
import axios from 'axios';

class Fotografias extends Component {

    state = { 
        films: []
    }
    
    componentDidMount() {
        axios
            .get("https://ghibliapi.herokuapp.com/films")
            .then(response => {
                this.setState({
                    films: response.data
                })
            })
            .catch(error => console.log(error));


    }

    eliminarComponente = () => {
        alert("Activado desde el componente padre!!!");
    }

    render() { 
        return ( 
            <div>
                {this.state.films.map(film => 
                <Fotografia 
                    name={film.title} 
                    director={film.director}
                    description={film.description}
                    key={film.id}
                    delete={this.eliminarComponente}
                /> )}
            </div>
        );
    }
}
 
export default Fotografias;