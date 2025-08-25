

import { useEffect } from "react"
import { Card, InputGroup, Form, Button, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux"
import {fetchSpecificNote } from "../features/individualNotes/individualNoteSlice"


const IndividualNotes = () => {

    const { id } = useParams()

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchSpecificNote(id));
        }, [dispatch,id]);

        const {note} = useSelector((state) => state.individualNote)

        console.log(note)

  return (
    <Card style={{ width: '35rem', height: '35rem' }}>
        <Card.Header> <h4>Note details :</h4> </Card.Header>
        <LinkContainer to="/">
            <Button variant="outline-primary">Back</Button>
        </LinkContainer>
        
        <Container className='d-flex justify-content-center align-items-center' >
            <Form className='mt-3'>
                <InputGroup className='mt-3' style={{ width: '30rem' }}>
                    <InputGroup.Text id="note-title">Title: </InputGroup.Text>
                        <Form.Control
                        placeholder={note?.title || ""}
                        aria-label="title"
                        aria-describedby="note-title"
                        />
                </InputGroup>
                <InputGroup className='mt-3'>
                    <InputGroup.Text>Description</InputGroup.Text>
                    <Form.Control as="textarea" aria-label="description" placeholder={note?.body || ""} />
                </InputGroup>
                <Container as={"div"} className='mt-5 ms-5' >
                    <Button variant="outline-dark" className='ms-5'>Update</Button>
                    <Button variant="outline-danger" className='ms-5'>Delete</Button>
                </Container>
                
            </Form>

        </Container>
    </Card>
  )
}

export default IndividualNotes