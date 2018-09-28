import React, { Component } from 'react';

class Tarjeta extends Component {
    
    render() { 
        return (<div className="card" style={{ width: "18rem" }}>
            <img className="card-img-top" src="https://www.purina.es/sites/g/files/mcldtz1656/files/2018-02/Perro%20salchicha%20%28Miniatura%20de%20pelo%20liso%29_400x378_0.jpg" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and
                make up the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
        </div>);
    }
}
 
export default Tarjeta;