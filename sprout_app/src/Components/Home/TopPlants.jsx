import {Card, Carousel, Container} from "react-bootstrap";
import './TopPlants.css';
import plant1 from '../../assets/topPlants/plant1.jpg';
import plant2 from '../../assets/topPlants/plant2.jpg';
import plant3 from '../../assets/topPlants/plant3.jpg';
import plant4 from '../../assets/topPlants/plant4.jpg';
import plant5 from '../../assets/topPlants/plant5.jpg';
import {useRef, useState} from "react";


export const TopPlants = () => {
    const [scrollPosition, setScrollPosition] = useState(-1);
    const myRef1 = useRef(null);
    const myRef2 = useRef(null);
    const myRef3 = useRef(null);
    const myRef4 = useRef(null);
    const myRef0 = useRef(null);

    // const testRef = createRef();

    const slideFunction = (eventNumber, direction) => {
        if (direction === "start") {
            if (scrollPosition < 4 - 3) {
                setScrollPosition((scrollPosition) => scrollPosition + 1)
            }
            switch (scrollPosition) {
                case 0:
                    myRef3.current.scrollIntoView({
                        behavior: 'smooth',
                        block: 'nearest',
                        inline: 'center'
                    })
                    return;
                case 1:
                    myRef0.current.scrollIntoView({
                        behavior: 'smooth',
                        block: 'nearest',
                        inline: 'center'
                    })
                    return;
            }
        } else if (direction === "end") {
            if (scrollPosition > 0) {
                setScrollPosition((scrollPosition) => scrollPosition - 1)
            }
            switch (scrollPosition) {
                case 0:
                    myRef1.current.scrollIntoView({
                        behavior: 'smooth',
                        block: 'nearest',
                        inline: 'center'
                    })
                    return;
                case 1:
                    myRef3.current.scrollIntoView({
                        behavior: 'smooth',
                        block: 'nearest',
                        inline: 'center'
                    })
                    return;
            }
        }
    }

    return (
        <div className={"top-plants-background"}>
            <Container>
                <h3 className={"primary-title top-plants-title"}>Top plants</h3>
                <Carousel slide={false} interval={null} pause={"hover"}
                          onSlide={(eventKey, direction) => slideFunction(eventKey, direction)}>
                    <Carousel.Item>
                        <Card ref={myRef1}>
                            <div className={"imageWrapper plant1"}>
                                <Card.Img variant={"top"} src={plant1}/>
                            </div>
                            <Card.Body>
                                <Card.Title>Philodendron</Card.Title>
                                <div className={"plantTagContainer"}>
                                    <div className={"plantTag toxicTag"}>TOXIC</div>
                                    <div className={"plantTag sunTag"}>SUN</div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Card ref={myRef2}>
                            <div className={"imageWrapper plant2"}>
                                <Card.Img variant={"top"} src={plant2}/>
                            </div>
                            <Card.Body>
                                <Card.Title>Monstera</Card.Title>
                                <div className={"plantTagContainer"}>
                                    <div className={"plantTag wetTag"}>WET</div>
                                    <div className={"plantTag sunTag"}>SUN</div>
                                    <div className={"plantTag petTag"}>PET</div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Card ref={myRef3}>
                            <div className={"imageWrapper plant3"}>
                                <Card.Img variant={"top"} src={plant3}/>
                            </div>
                            <Card.Body>
                                <Card.Title>Aloe Vera</Card.Title>
                                <div className={"plantTagContainer"}>
                                    <div className={"plantTag dryTag"}>DRY</div>
                                    <div className={"plantTag sunTag"}>SUN</div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Card ref={myRef4}>
                            <div className={"imageWrapper plant4"}>
                                <Card.Img variant={"top"} src={plant4}/>
                            </div>
                            <Card.Body>
                                <Card.Title>Musa</Card.Title>
                                <div className={"plantTagContainer"}>
                                    <div className={"plantTag sunTag"}>SUN</div>
                                    <div className={"plantTag dryTag"}>DRY</div>
                                    <div className={"plantTag petTag"}>PET</div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Card ref={myRef0}>
                            <div className={"imageWrapper plant5"}>
                                <Card.Img variant={"top"} src={plant5}/>
                            </div>
                            <Card.Body>
                                <Card.Title>Bird's Nest Fern</Card.Title>
                                <div className={"plantTagContainer"}>
                                    <div className={"plantTag petTag"}>PET</div>
                                    <div className={"plantTag wetTag"}>WET</div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </div>


        // <div className={"sectionContainer"} style={{backgroundColor: "#F8E5DA"}}>
        //     <h3 className={"primary-title"} style={{padding: 32}}>Top Plants</h3>
        //     <Carousel>
        //         <Carousel.Item>
        //             <Card>
        //                 <div className={"imageWrapper"}>
        //                     <Card.Img variant="top" src={plant1}/>
        //                 </div>
        //                 <Card.Body>
        //                     <Card.Title>Card Title</Card.Title>
        //                     <Card.Text>
        //                         Some quick example text to build on the card title and make up the
        //                         bulk of the card's content.
        //                     </Card.Text>
        //                     <Button variant="primary">Go somewhere</Button>
        //                 </Card.Body>
        //             </Card>
        //         </Carousel.Item>
        //         <Carousel.Item>
        //             <Card>
        //                 <div className={"imageWrapper"}>
        //                     <Card.Img variant="top" src={plant2}/>
        //                 </div>
        //                 <Card.Body>
        //                     <Card.Title>Card Title</Card.Title>
        //                     <Card.Text>
        //                         Some quick example text to build on the card title and make up the
        //                         bulk of the card's content.
        //                     </Card.Text>
        //                     <Button variant="primary">Go somewhere</Button>
        //                 </Card.Body>
        //             </Card>
        //         </Carousel.Item>
        //         <Carousel.Item>
        //             <Card>
        //                 <div className={"imageWrapper"}>
        //                     <Card.Img variant="top" src={plant3}/>
        //                 </div>
        //                 <Card.Body>
        //                     <Card.Title>Card Title</Card.Title>
        //                     <Card.Text>
        //                         Some quick example text to build on the card title and make up the
        //                         bulk of the card's content.
        //                     </Card.Text>
        //                     <Button variant="primary">Go somewhere</Button>
        //                 </Card.Body>
        //             </Card>
        //         </Carousel.Item>
        //     </Carousel>
        // </div>
        // <div className={"sectionContainer"} style={{backgroundColor: "#F8E5DA"}}>
        //     <Container className={"sectionContainer"} style={{padding: 36}}>
        //         <Carousel style={{width: "100%"}}>
        //             <Carousel.Item>
        //                 <Row className={"row-cols-1 row-cols-sm-2 row-cols-lg-3"}>
        //                     <Col>
        //                         <Card>
        //                             <Card.Img variant={"top"} src={plant1}/>
        //                             <Card.Body>
        //                                 <Card.Title>Philodendron scandens</Card.Title>
        //                                 <div className={"plantTagContainer"}>
        //                                     <div className={"plantTag toxicTag"}>TOXIC</div>
        //                                     <div className={"plantTag sunTag"}>SUN</div>
        //                                 </div>
        //                                 <div className={"plantDataContainer"}>
        //                                     <p className={"price"}>
        //                                         25$-45$
        //                                     </p>
        //                                     {/*<a href={"/"} className={"goToCartBtn"}>*/}
        //                                     {/*    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36"*/}
        //                                     {/*         fill="currentColor" className="bi bi-cart-fill"*/}
        //                                     {/*         viewBox="0 0 16 16">*/}
        //                                     {/*        <path*/}
        //                                     {/*            d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>*/}
        //                                     {/*    </svg>*/}
        //                                     {/*</a>*/}
        //                                 </div>
        //                             </Card.Body>
        //                         </Card>
        //                     </Col>
        //                     <Col>
        //                         <Card>
        //                             <Card.Img variant={"top"} src={plant2}/>
        //                             <Card.Body>
        //                                 <Card.Title>Monstera</Card.Title>
        //                                 <div className={"plantTagContainer"}>
        //                                     <div className={"plantTag wetTag"}>WET</div>
        //                                     <div className={"plantTag sunTag"}>SUN</div>
        //                                     <div className={"plantTag petTag"}>PET</div>
        //                                 </div>
        //                                 <div className={"plantDataContainer"}>
        //                                     <p className={"price"}>
        //                                         30$-75$
        //                                     </p>
        //                                 </div>
        //                             </Card.Body>
        //                         </Card>
        //                     </Col>
        //                     <Col>
        //                         <Card>
        //                             <Card.Img variant={"top"} src={plant3}/>
        //                             <Card.Body>
        //                                 <Card.Title>Aloe Vera</Card.Title>
        //                                 <div className={"plantTagContainer"}>
        //                                     <div className={"plantTag dryTag"}>DRY</div>
        //                                     <div className={"plantTag sunTag"}>SUN</div>
        //                                 </div>
        //                                 <div className={"plantDataContainer"}>
        //                                     <p className={"price"}>
        //                                         15$-20$
        //                                     </p>
        //                                 </div>
        //                             </Card.Body>
        //                         </Card>
        //                     </Col>
        //                 </Row>
        //             </Carousel.Item>
        //             <Carousel.Item>
        //                 <Row>
        //                     <Col>
        //                         <Card>
        //                             <Card.Img variant={"top"} src={plant1}/>
        //                             <Card.Body>
        //                                 <Card.Title>Philodendron scandens</Card.Title>
        //                                 <div className={"plantTagContainer"}>
        //                                     <div className={"plantTag toxicTag"}>TOXIC</div>
        //                                     <div className={"plantTag sunTag"}>SUN</div>
        //                                 </div>
        //                                 <div className={"plantDataContainer"}>
        //                                     <p className={"price"}>
        //                                         25$-45$
        //                                     </p>
        //                                     {/*<a href={"/"} className={"goToCartBtn"}>*/}
        //                                     {/*    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36"*/}
        //                                     {/*         fill="currentColor" className="bi bi-cart-fill"*/}
        //                                     {/*         viewBox="0 0 16 16">*/}
        //                                     {/*        <path*/}
        //                                     {/*            d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>*/}
        //                                     {/*    </svg>*/}
        //                                     {/*</a>*/}
        //                                 </div>
        //                             </Card.Body>
        //                         </Card>
        //                     </Col>
        //                     <Col>
        //                         <Card>
        //                             <Card.Img variant={"top"} src={plant2}/>
        //                             <Card.Body>
        //                                 <Card.Title>Monstera</Card.Title>
        //                                 <div className={"plantTagContainer"}>
        //                                     <div className={"plantTag wetTag"}>WET</div>
        //                                     <div className={"plantTag sunTag"}>SUN</div>
        //                                     <div className={"plantTag petTag"}>PET</div>
        //                                 </div>
        //                                 <div className={"plantDataContainer"}>
        //                                     <p className={"price"}>
        //                                         30$-75$
        //                                     </p>
        //                                 </div>
        //                             </Card.Body>
        //                         </Card>
        //                     </Col>
        //                     <Col>
        //                         <Card>
        //                             <Card.Img variant={"top"} src={plant3}/>
        //                             <Card.Body>
        //                                 <Card.Title>Aloe Vera</Card.Title>
        //                                 <div className={"plantTagContainer"}>
        //                                     <div className={"plantTag dryTag"}>DRY</div>
        //                                     <div className={"plantTag sunTag"}>SUN</div>
        //                                 </div>
        //                                 <div className={"plantDataContainer"}>
        //                                     <p className={"price"}>
        //                                         15$-20$
        //                                     </p>
        //                                 </div>
        //                             </Card.Body>
        //                         </Card>
        //                     </Col>
        //                 </Row>
        //             </Carousel.Item>
        //             {/*<Carousel.Item>*/}
        //             {/*    <Row>*/}
        //             {/*        <Col style={{backgroundColor: "red"}}>*/}
        //             {/*            <Card>*/}
        //             {/*                test4*/}
        //             {/*            </Card>*/}
        //             {/*        </Col>*/}
        //             {/*        <Col style={{backgroundColor: "green"}}>*/}
        //             {/*            <Card>*/}
        //             {/*                test5*/}
        //             {/*            </Card>*/}
        //             {/*        </Col>*/}
        //             {/*        <Col style={{backgroundColor: "blue"}}>*/}
        //             {/*            <Card>*/}
        //             {/*                test6*/}
        //             {/*            </Card>*/}
        //             {/*        </Col>*/}
        //             {/*    </Row>*/}
        //             {/*</Carousel.Item>*/}
        //         </Carousel>
        //     </Container>
        // </div>
    );
}