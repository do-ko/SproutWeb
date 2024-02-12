import {Col, Container, Row, Stack} from "react-bootstrap";
import pots from "../../assets/pots.jpg";
import './Categories.css';

export const Categories = () => {
    return (
        <Container className={"sectionContainer"} style={{height: "100vh"}}>
            <Row className={"row-cols-1 row-cols-lg-2"} style={{width: "80%", height: "70%"}}>
                <Col lg={8}>
                    <Stack gap={3} style={{height: "100%"}}>
                        <div className={"imageCategory imagePlants textCategory"}>
                            Plants
                        </div>
                        <div className={"imageCategory imageGround textCategory"}>
                            Ground
                        </div>
                    </Stack>
                </Col>
                <Col lg={4}>
                    <div className={"imageCategory imagePots textCategory"}>
                        Pots
                    </div>
                </Col>
            </Row>
        </Container>
    )
}