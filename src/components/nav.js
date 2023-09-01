import React from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

export default function nav() {

    return (
        <Container>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#">Project Name</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/profile">Profile</Nav.Link>
                        <Nav.Link href="/events">Events</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </Container>
        )
    } 