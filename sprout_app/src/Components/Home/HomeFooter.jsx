import {Button, Container, Form, Stack} from "react-bootstrap";
import "./HomeFooter.css";

export const HomeFooter = () => {
    return (
        <div className={"footer-background"}>
            <Container>
                <Stack gap={5}>
                    <div className={"subscribe-container"}>
                        <h3 className={"centered-text"}>Stay in the Loop!</h3>
                        <p className={"centered-text"}>Subscribe for Exclusive Deals and Updates!</p>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                        </Form>
                        <Button variant={"custom"} type="submit" size={"lg"}>
                            Subscribe
                        </Button>
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
        </div>
    );
}