import React from 'react'
import { Card,ListGroup} from 'react-bootstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
export const Contact = () => {
    return (
    <div>
      this is contact!!
      <Card style={{ width: '18rem' , color:'black'}}>
         <Card.Header>My Social Networks</Card.Header>
            <ListGroup variant="flush">
                <ListGroup.Item>Instagram</ListGroup.Item>
                <ListGroup.Item>FaceBook</ListGroup.Item>
                <ListGroup.Item>Linkedin</ListGroup.Item>
                <ListGroup.Item>Twitter</ListGroup.Item>
                <ListGroup.Item>Github</ListGroup.Item>
                <ListGroup.Item>Medium</ListGroup.Item>
            </ListGroup>
      </Card>
    </div>
    )
}
