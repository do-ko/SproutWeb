import {Button, Form} from "react-bootstrap";
import {Navigation} from "../Components/Home/Navigation";

export const LogInPage = () => {
    return (
        <>
            <Navigation sticky={null} fixed={"top"}/>
            <div className={"auth-container"}>
                <div className={"form-container"}>
                    <p className={"form-title secondary-title"}>
                        Login
                    </p>

                    <Form>
                        <Form.Group className={"mb-3"} controlId={"formGroupEmail"}>
                            <Form.Control type={"email"} placeholder={"Email"}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupPassword">
                            <Form.Control type="password" placeholder="Password"/>
                        </Form.Group>
                        <Form.Group as={"div"}>
                            <Button variant={"custom"} size={"lg"} style={{width: "100%"}}
                                    type="submit">SIGN IN</Button>
                        </Form.Group>
                    </Form>

                    <p className={"register-link-text"}>New here? <a className={"register-link"} href={"/"}>Create an
                        account</a></p>
                </div>
                {/*Log In page*/}

            </div>
        </>
    );
}