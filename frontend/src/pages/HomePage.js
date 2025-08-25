'use client'

import { Card, ListGroup, ListGroupItem, Badge, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { fetchNotes } from "../features/allNotes/listNotesSlice"


const HomePage = () => {

    const dispatch = useDispatch();

    // Access notes and loading state from Redux
    const { notes, loading, errors } = useSelector((state) => state.notes)

    useEffect(() => {
    dispatch(fetchNotes())
    }, [dispatch])

  return (
    <Card style={{ width: '35rem', height: '35rem' }}>
        <Card.Header> 
            <h4>List of all notes :  
                <Badge bg="dark"  style={{float:'right'}}>{notes.length}</Badge>
            </h4>
        </Card.Header>
        <LinkContainer to="/create-new-note">
            <Button variant="outline-primary" className='m-2'>New Note</Button>
        </LinkContainer>
        <div style={{ height: '30rem', overflowY: 'auto' }}>

        <ListGroup as={"ol"}  numbered variant='flush'>
            {loading && ( <ListGroupItem>Loading notes...</ListGroupItem>)}
            {errors && (  <ListGroupItem className="text-danger">{errors}</ListGroupItem> )}
            
            {/*DEFAULT TASK*/}
            {notes.length === 0 && (
                <ListGroupItem as={"li"} className="d-flex align-items-center" action>
                    <Card.Title className="text-right mx-2" >New Note</Card.Title>
                    <Card.Body>This is my very first note on this app, but it's a pre-defined note.</Card.Body>
            </ListGroupItem>)}

            {/*DISPLAY TASKS WHEN GRATER THAN 0 */}
            {notes.length > 0 && notes.map((note) => (
              <ListGroupItem key={note.id} as={"li"} className="d-flex align-items-center" action>
                <Link to={`/note/${note.id}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                    <Card.Title className="text-right mx-2" >{note.title}</Card.Title>
                </Link>
                    <Card.Body>{note.body}</Card.Body>
            </ListGroupItem> ))}
         
        </ListGroup>
        </div>
    </Card>
  )
}

export default HomePage