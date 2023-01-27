import React from 'react'
import { Card, ListGroup, ListGroupItem, Badge } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <Card style={{ width: '35rem', height: '35rem' }}>
        <Card.Header> 
            <h4>List of all notes :  
                <Badge bg="dark"  style={{float:'right'}}>1</Badge>
            </h4>
        </Card.Header>
        <ListGroup as={"ol"}  numbered variant='flush'>
            
            <ListGroupItem as={"li"} className="d-flex align-items-center" action>
                <Link to="/note:1" style={{ color: 'inherit', textDecoration: 'none' }}>
                    <Card.Title className="text-right mx-2" >Note#1</Card.Title>
                </Link>
                <Card.Body>This is my very first note on this app, but it's a pre-defined note.</Card.Body>
            </ListGroupItem>
         
        </ListGroup>
    </Card>
  )
}

export default HomePage