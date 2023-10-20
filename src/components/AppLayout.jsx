import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

function AppLayout(props) {
    return (
        <>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to={"/"}>
                    Website Name
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
                    <Nav.Link as={Link} to={"searchPokemon"}>Search Pokemon</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        <div>
            <Outlet/>
        </div>
        </>
    )
}

export default AppLayout;