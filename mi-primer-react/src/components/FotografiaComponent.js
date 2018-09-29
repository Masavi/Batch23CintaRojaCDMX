import React, { Component } from 'react';

import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

class Fotografia extends Component {
    constructor(props){
      super(props);

      this.state = props;
    }

    state = {
        title: "??????",
        director: "???????",
        description: "??????"
    };

  render() {
    return (
      <div>
        <Card className="card-films">
          <CardBody>
            <CardTitle>{this.state.title}</CardTitle>
            <CardSubtitle>{this.state.director}</CardSubtitle>
            <CardText>
              {this.state.description}
            </CardText>
            <Button onClick={this.props.delete} color='danger'>Eliminar</Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}
 
export default Fotografia;