import "./Header.css"
import {Col, Row} from "react-bootstrap";
export const Header = () => {
    return(
        <div className={"headerContainer"}>
            <Row>
                <Col style={{backgroundColor: "blue"}}>d</Col>
                <Col style={{backgroundColor: "red"}}><img src={"sprout_app/src/assets/hero.jpg"} alt="Hero Image" /></Col>
            </Row>
        </div>
    )
}