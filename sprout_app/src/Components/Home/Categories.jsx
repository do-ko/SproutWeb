import {Col, Container, Row, Stack} from "react-bootstrap";
import pots from "../../assets/pots.jpg";
import './Categories.css';

export const Categories = () => {
    return (
        <Container className={"sectionContainer"} style={{height: "100vh"}}>
            <Row className={"row-cols-1 row-cols-lg-2"} style={{width: "80%", height: "70%"}}>
                <Col lg={8}>
                    <Stack gap={3} style={{height: "100%"}}>
                        <a href={"/plants"} className={"imageCategory imagePlants textCategory"}>
                            Plants
                        </a>
                        <a href={"/grounds"} className={"imageCategory imageGround textCategory"}>
                            Ground
                        </a>
                    </Stack>
                </Col>
                <Col lg={4} className={"pots-container"}>
                    <a href={"/"} className={"imageCategory imagePots textCategory"}>
                        Pots
                    </a>
                </Col>
            </Row>
        </Container>
    )
}