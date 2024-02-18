import {Button, Form} from "react-bootstrap";
import {Navigation} from "../Components/Home/Navigation";
import {useContext, useEffect, useRef, useState} from "react";
import axios from "../api/axios";
import AuthContext from "../context/AuthProvider";
import {Navigate} from "react-router-dom";
import {useCookies} from "react-cookie";


export const LogInPage = () => {
    const {setAuth} = useContext(AuthContext);
    const errRef = useRef();
    const [errorMsg, setErrorMsg] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [success, setSuccess] = useState(false)
    const [cookies, setCookie] = useCookies(['token']);

    useEffect(() => {
        setErrorMsg("");
    }, [email, password])

    const onInputEmail = ({target: {value}}) => setEmail(value)
    const onInputPass = ({target: {value}}) => setPassword(value)
    const onFormSubmit = async e => {
        e.preventDefault()
        console.log(email)
        console.log(password)

        try {
            const response = await axios.post("/api/auth/authenticate",
                JSON.stringify({email: email, password: password}),
                {
                    headers: {"Content-Type": "application/json"},
                });
            const accessToken = response.data.token;
            setAuth({email, password, accessToken});
            setCookie('token', accessToken);
            setEmail("")
            setPassword("")
            setSuccess(true)
        } catch (e) {
            console.log("Error")
            console.log(e)
            setErrorMsg("Wrong email or password.")
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
                                Login
                            </p>
                            <p ref={errRef} className={errorMsg ? "errmsg" : "offscreen"}
                               aria-live={"assertive"}>{errorMsg}</p>

                            <Form onSubmit={onFormSubmit}>
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
                                            type="submit">SIGN IN</Button>
                                </Form.Group>
                            </Form>

                            <p className={"register-link-text"}>New here? <a className={"register-link"}
                                                                             href={"/register"}>Create
                                an
                                account</a></p>
                        </div>
                    </div>
                </>

            }

        </>
    );
}