import {Button, Form} from "react-bootstrap";
import {Navigation} from "../Components/Home/Navigation";
import {useContext, useEffect, useRef, useState} from "react";
import axios from "../api/axios";
import AuthContext from "../context/AuthProvider";
import {Navigate} from "react-router-dom";
import {useCookies} from "react-cookie";

export const RegisterPage = () => {
    const {setAuth} = useContext(AuthContext);
    const errRef = useRef();
    const [errorMsg, setErrorMsg] = useState("")
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [success, setSuccess] = useState(false)
    const [cookies, setCookie] = useCookies(['token']);

    useEffect(() => {
        setErrorMsg("");
    }, [firstName, lastName, email, password])

    const onInputFirstName = ({target: {value}}) => setFirstName(value)
    const onInputLastName = ({target: {value}}) => setLastName(value)
    const onInputEmail = ({target: {value}}) => setEmail(value)
    const onInputPass = ({target: {value}}) => setPassword(value)

    const onFormSubmit = async e => {
        e.preventDefault()
        console.log(email)
        console.log(password)
        console.log(firstName)
        console.log(lastName)

        try {
            const response = await axios.post("/api/auth/register",
                JSON.stringify({firstname: firstName, lastname: lastName, email: email, password: password}),
                {
                    headers: {"Content-Type": "application/json"},
                });
            const accessToken = response.data.token;
            setAuth({email, password, accessToken});
            setCookie('token', accessToken);
            setEmail("")
            setPassword("")
            setFirstName("")
            setLastName("")
            setSuccess(true)
        } catch (e) {
            console.log("Error")
            console.log(e)
            setErrorMsg("Registration failed.")
        }
    }


    return (
        <>
            {success ? <Navigate to={"/"}/> :
                <>
                    <Navigation sticky={null} fixed={"top"}/>
                    <div className={"auth-container"}>
                        <div className={"form-container"}>
                            <p className={"form-title secondary-title"}>
                                Register
                            </p>
                            <p ref={errRef} className={errorMsg ? "errmsg" : "offscreen"}
                               aria-live={"assertive"}>{errorMsg}</p>

                            <Form onSubmit={onFormSubmit}>
                                <Form.Group className={"mb-3"} controlId={"firstNameGroup"}>
                                    <Form.Control placeholder={"First Name"} onChange={onInputFirstName}
                                                  value={firstName}/>
                                </Form.Group>
                                <Form.Group className={"mb-3"} controlId={"lastNameGroup"}>
                                    <Form.Control placeholder={"Last Name"} onChange={onInputLastName}
                                                  value={lastName}/>
                                </Form.Group>
                                <Form.Group className={"mb-3"} controlId={"formGroupEmail"}>
                                    <Form.Control type={"email"} placeholder={"Email"} onChange={onInputEmail}
                                                  value={email}/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formGroupPassword">
                                    <Form.Control type="password" placeholder="Password" onChange={onInputPass}
                                                  value={password}/>
                                </Form.Group>
                                <Form.Group as={"div"}>
                                    <Button variant={"custom"} size={"lg"} style={{width: "100%"}}
                                            type="submit">REGISTER</Button>
                                </Form.Group>
                            </Form>

                            <p className={"register-link-text"}>Already have an account? <a className={"register-link"}
                                                                                            href={"/login"}>Sign in</a>
                            </p>
                        </div>
                    </div>
                </>

            }

        </>
    );
}