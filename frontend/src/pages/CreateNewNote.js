import React, { useState } from 'react'
import { Card, Container, Form, InputGroup, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import {LinkContainer} from 'react-router-bootstrap'
import { useNavigate } from 'react-router-dom'
import { create_newNote } from '../features/createNewNote/createNewNoteSlice'


const CreateNewNote = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [values, setValues] = useState({})

    const submitHandle = (e)=>{
        e.preventDefault()
        dispatch(create_newNote(values))
        navigate("/")
    }


  return (
    <Card style={{ width: '35rem', height: '35rem' }}>
        <Card.Header> <h4>Enter note details :</h4> </Card.Header>
        <LinkContainer to="/">
            <Button variant="outline-primary">Back</Button>
        </LinkContainer>
        
        <Container className='d-flex justify-content-center align-items-center'>
            <Form className='mt-3' style={{ width: '30rem' }}>
                <InputGroup className='mt-3' >
                    <InputGroup.Text id="note-title">Title: </InputGroup.Text>
                        <Form.Control
                        placeholder="Note title"
                        aria-label="title"
                        onChange={(e)=> { setValues({...values,"title": e.target.value})}}
                        aria-describedby="note-title"
                        />
                </InputGroup>
                <InputGroup className='mt-3'>
                    <InputGroup.Text>Description</InputGroup.Text>
                    <Form.Control as="textarea" 
                    aria-label="description" 
                    onChange={(e)=> { setValues({...values,"body": e.target.value})}}
                    placeholder='Type the body of the note here....' />
                </InputGroup>
                
                <Button 
                    style={{ width: '30rem' }}
                    variant="outline-success" 
                    className='me-5 mt-5'
                    onClick={submitHandle}
                    >Done
                </Button>
            </Form>
        </Container>
    </Card>
  )
}

export default CreateNewNote
