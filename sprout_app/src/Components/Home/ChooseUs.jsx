import {Col, Container, Row} from "react-bootstrap";

export const ChooseUs = () => {
    return (
        <Container className={"sectionContainer"}>
            <Container>
                <Row style={{marginBottom: 16}}>
                    <Col className={"primary-title centered-text"}>Choose Us!</Col>
                </Row>
                <Row className={"row-cols-1 row-cols-lg-3"}>
                    <Col className={"centered-text"} style={{marginTop: 32}}>
                        <Row>
                            <Col className={"secondary-title"}>
                                Unparalleled quality
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                We curate and care for our plants with the utmost dedication. Each plant at Sprout is
                                handpicked and nurtured to thrive, ensuring you receive only the healthiest and most
                                vibrant
                                green companions.
                            </Col>
                        </Row>
                    </Col>
                    <Col className={"centered-text"} style={{marginTop: 32}}>
                        <Row>
                            <Col className={"secondary-title"}>
                                Variety and Versatility
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                Whether you're a seasoned plant enthusiast or just starting your green journey, Sprout
                                offers an extensive collection of plants. From low-maintenance succulents to exotic
                                tropical
                                wonders, we have something for everyone.
                            </Col>
                        </Row>
                    </Col>
                    <Col className={"centered-text"} style={{marginTop: 32}}>
                        <Row>
                            <Col className={"secondary-title"}>
                                Convenient Shopping
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                Explore and purchase your favorite plants right from the comfort of your home through
                                our
                                user-friendly website. We also offer secure and efficient delivery to your doorstep.
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}