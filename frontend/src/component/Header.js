import React from 'react'
import { Navbar, Container } from 'react-bootstrap'

const Header = () => {
  return (
    <Navbar variant="dark" bg="dark" className='m-3 rounded'>
        <Container>
          <Navbar.Brand>NOTES app</Navbar.Brand>
        </Container>
      </Navbar>
  )
}

export default Header