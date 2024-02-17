import Navbar from 'react-bootstrap/Navbar';
import {Container, Nav} from "react-bootstrap";
import "./Navigation.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleUser} from "@fortawesome/free-regular-svg-icons";
import {faBars, faCartShopping} from "@fortawesome/free-solid-svg-icons";

export const Navigation = () => {
    return (
        <Navbar id={"navigation-custom"} sticky={"top"} expand={"lg"}>
            <Container fluid={"md"}>
                <Navbar.Brand className={"brand-name-large"}>Sprout</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <FontAwesomeIcon icon={faBars} />
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav" className={"collapsable-menu"}>
                    <Nav>
                        <Container className={"store-links-container"}>
                            <Nav.Link>plants</Nav.Link>
                            <Nav.Link>ground</Nav.Link>
                            <Nav.Link>pots</Nav.Link>
                        </Container>

                    </Nav>
                </Navbar.Collapse>
                <Navbar.Brand className={"brand-name-small"}>Sprout</Navbar.Brand>
                <Nav className={"account-links-container"}>
                    <Nav.Link className={"account-link"}>
                        <FontAwesomeIcon icon={faCartShopping} />
                        <p className={"link-text"}>Cart</p>
                    </Nav.Link>
                    <Nav.Link className={"account-link"}>
                        <FontAwesomeIcon icon={faCircleUser}/>
                        <p className={"link-text"}>Sign In</p>
                    </Nav.Link>
                </Nav>

            </Container>
        </Navbar>
    )
}