import {Button, Container, Form, Modal, Stack} from "react-bootstrap";
import "./HomeFooter.css";
import {useState} from "react";

export const HomeFooter = () => {
    const [modalShow, setModalShow] = useState(false);

    function MyVerticallyCenteredModal(props) {
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Thank You for Subscribing!
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        Welcome to the Sprout family! We're thrilled to have you on board, and we can't
                        wait to share the joy of cultivating a green paradise with you.
                    </p>
                </Modal.Body>
            </Modal>
        );
    }


    return (
        <div className={"footer-background"}>
            <Container>
                <Stack gap={5}>
                    <div className={"subscribe-container"}>
                        <h3 className={"centered-text"}>Stay in the Loop!</h3>
                        <p className={"centered-text"}>Subscribe for Exclusive Deals and Updates!</p>
                        <Form onSubmit={(e) => {
                            e.preventDefault()
                            setModalShow(true)
                        }
                        }>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Enter email"/>
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group as={"div"} style={{display: "flex", justifyContent: "center"}}>
                                <Button variant={"custom"} size={"lg"}
                                        type="submit">Subscribe</Button>
                            </Form.Group>
                        </Form>
                    </div>
                    <div className={"disclaimer-container"}>
                        <p className={"disclaimer-text"}>
                            © 2023 Sprout. All rights reserved.
                        </p>
                        <p className={"disclaimer-text"}>
                            The content, images, and materials on this website are the intellectual property of Sprout
                            and are protected by copyright laws. Unauthorized use or reproduction of any part of this
                            website is prohibited and may result in legal action.
                        </p>
                        <p className={"disclaimer-text"}>
                            For inquiries regarding the use of our content, please contact us at
                            legal@sproutwebsite.com.
                        </p>
                    </div>

                </Stack>
            </Container>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
    );
}