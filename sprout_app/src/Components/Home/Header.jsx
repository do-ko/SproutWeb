import "./Header.css"
import {Button, Col, Container, Row} from "react-bootstrap";
import hero from "../../assets/hero.jpg"
export const Header = () => {
    return(
        <Container className={"headerContainer"}>
            <Row style={{width:"100%"}}>
                <Col className={"heroTextContainer"}>
                    <Row>
                        <Col className={"primary-title"}>
                            Planting joy in every corner!
                        </Col>
                    </Row>
                    <Row>
                        <Col className={"heroText"}>
                            Transform your space with plants.
                        </Col>
                    </Row>
                    <Row className={"heroButtonContainer"}>
                        <Col>
                            <Button variant={"custom"} href={"/"} size={"lg"}>
                                buy plants
                            </Button>
                        </Col>
                    </Row>
                </Col>
                <Col className={"d-none d-lg-block"}><img className={"heroImage"} src={hero} alt="Hero Image" /></Col>
            </Row>
        </Container>
    )
}