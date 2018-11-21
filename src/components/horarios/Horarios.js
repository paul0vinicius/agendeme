import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap';

class Horarios extends Component {
  render() {
    return (
      <ListGroup>
        <ListGroupItem action>05h</ListGroupItem>
        <ListGroupItem action>07h30min</ListGroupItem>
        <ListGroupItem action>14h</ListGroupItem>
      </ListGroup>
    )
  }
}

export default Horarios;