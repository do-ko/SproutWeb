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
                                <Card.Img className={"topImage"} variant={"top"} src={plant1}/>
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
                                <Card.Img className={"topImage"} variant={"top"} src={plant2}/>
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
                                <Card.Img className={"topImage"} variant={"top"} src={plant3}/>
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
                                <Card.Img className={"topImage"} variant={"top"} src={plant4}/>
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
                                <Card.Img className={"topImage"} variant={"top"} src={plant5}/>
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
    );
}