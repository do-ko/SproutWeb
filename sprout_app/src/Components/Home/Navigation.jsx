import Navbar from 'react-bootstrap/Navbar';
import {Col, Container, Nav, Row} from "react-bootstrap";
import "./Navigation.css"
export const Navigation = () => {
    return(
        <Navbar id={"navigation-custom"} fixed={"top"} expand={"lg"}>
            <Container fluid={"md"}>
                <Navbar.Brand>Sprout</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link>Test</Nav.Link>
                        <Nav.Link>Test2</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Navbar.Text>
                            Signed in as: Mark Otto
                        </Navbar.Text>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}