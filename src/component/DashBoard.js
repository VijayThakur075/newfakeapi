import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LogOut from './LogOut';
import { Navbar, Nav, Container } from 'react-bootstrap';

export default function Dashboard() {
  const token = useSelector(state => state.userToken.token)

  return (
    <div>
      {!token ? (
        <>
          <Link to="/login">Login</Link><br />
          <Link to="/registration">registration</Link>
        </>
      ) : (
        <>
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="#home">Navbar</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="/products">products</Nav.Link>
                <Nav.Link href="/locations">locations</Nav.Link>
                <Nav.Link href="/families">families</Nav.Link>
                <Nav.Link href="/transactions">transactions</Nav.Link>
              </Nav>
            </Container>
          </Navbar>

        </>

      )}
      <>
        {token && <LogOut />}
      </>
    </div>
  )
}

