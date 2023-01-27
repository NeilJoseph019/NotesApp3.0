import React from 'react'
import { Card, InputGroup, Form, Button, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const IndividualNotes = () => {
  return (
    <Card style={{ width: '35rem', height: '35rem' }}>
        <Card.Header> <h4>Enter note details :</h4> </Card.Header>
        <LinkContainer to="/">
            <Button variant="outline-primary">Back</Button>
        </LinkContainer>
        
        <Container className='d-flex justify-content-center align-items-center' >
            <Form className='mt-3'>
                <InputGroup className='mt-3' style={{ width: '30rem' }}>
                    <InputGroup.Text id="note-title">Title: </InputGroup.Text>
                        <Form.Control
                        placeholder="Note title"
                        aria-label="title"
                        aria-describedby="note-title"
                        />
                </InputGroup>
                <InputGroup className='mt-3'>
                    <InputGroup.Text>With textarea</InputGroup.Text>
                    <Form.Control as="textarea" aria-label="With textarea" />
                </InputGroup>
                <Container as={"div"} className='mt-5 ms-5' >
                    <Button variant="outline-success" className='me-5'>Done</Button>
                    <Button variant="outline-dark" className='ms-5'>Update</Button>
                </Container>
                
            </Form>

        </Container>
    </Card>
  )
}

export default IndividualNotes