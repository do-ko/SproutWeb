import {Col, Container, Row, Stack} from "react-bootstrap";
import './Reviews.css'
import StarSvg from "../../assets/svgs/StarSvg";

export const Reviews = () => {
    return (
        <Container className={"container-section"}>
            <h3 className={"primary-title reviews-title"}>100+ satisfied customers</h3>
            <Stack gap={3}>
                <Row className={"review-container"} style={{padding: 0}}>
                    <Col lg={4} className={"review-image image1"}/>
                    <Col lg={8} className={"review-data"}>
                        <div className={"review-name-container"}>
                            <h5 className={"review-name"}>
                                Jasmine K.
                            </h5>
                            <div className={"review-stars"}>
                                <StarSvg/>
                                <StarSvg/>
                                <StarSvg/>
                                <StarSvg/>
                                <StarSvg/>
                            </div>
                        </div>
                        <p>
                            I couldn't be more thrilled with my purchase from Sprout! It arrived in perfect condition,
                            and it has truly elevated the ambiance of my home. The quality, packaging, and customer
                            service were all outstanding. I'll definitely be a repeat customer!
                        </p>
                    </Col>
                </Row>
                <Row className={"review-container"} style={{padding: 0}}>
                    <Col lg={4} className={"review-image image2"}/>
                    <Col lg={8} className={"review-data"}>
                        <div className={"review-name-container"}>
                            <h5 className={"review-name"}>
                                Emily A.
                            </h5>
                            <div className={"review-stars"}>
                                <StarSvg/>
                                <StarSvg/>
                                <StarSvg/>
                                <StarSvg/>
                                <StarSvg/>
                            </div>
                        </div>
                        <p>
                            I'm absolutely delighted with my Ficus plant from Sprout! It arrived in perfect condition
                            and has added a touch of natural beauty to my space. Exceptional service and quality. I
                            highly recommend Sprout for all your plant needs!
                        </p>
                    </Col>
                </Row>
                <Row className={"review-container"} style={{padding: 0}}>
                    <Col lg={4} className={"review-image image3"}/>
                    <Col lg={8} className={"review-data"}>
                        <div className={"review-name-container"}>
                            <h5 className={"review-name"}>
                                Benjamin M.
                            </h5>
                            <div className={"review-stars"}>
                                <StarSvg/>
                                <StarSvg/>
                                <StarSvg/>
                                <StarSvg/>
                                <StarSvg/>
                            </div>
                        </div>
                        <p>
                            I'm loving my Monstera from Sprout! It arrived in excellent condition and has added a
                            refreshing touch of green to my living space. The quality and service exceeded my
                            expectations. I highly recommend Sprout for their top-notch plants!
                        </p>
                    </Col>
                </Row>
            </Stack>
        </Container>
    )
}