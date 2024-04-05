import {Navigation} from "../Components/Home/Navigation";
import React, {useContext, useEffect, useState} from "react";
import {Col, Form, Row, Stack} from "react-bootstrap";
import {SearchBar} from "../Components/Products/SearchBar";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFilter} from "@fortawesome/free-solid-svg-icons";
import {Product} from "../Components/Products/Product";
import ProductContext from "../context/ProductProvider";

export const GroundsPage = () => {
    const {getGrounds} = useContext(ProductContext);
    const [searchResults, setSearchResults] = useState([])
    const [grounds, setGrounds] = useState([])
    const [filter, setFilter] = useState(false)
    const [acidicFilter, setAcidicFilter] = useState(false)
    const [alkalineFilter, setAlkalineFilter] = useState(false)
    const [crumblyFilter, setCrumblyFilter] = useState(false)
    const [looseFilter, setLooseFilter] = useState(false)

    useEffect(() => {
        getGrounds().then(json => {
            setGrounds(json)
            return json
        }).then(json => {
            setSearchResults(json)
        })
    }, [])

    useEffect(() => {
        let filterList = []
        if (acidicFilter) filterList.push('acidic')
        if (alkalineFilter) filterList.push('alkaline')
        if (crumblyFilter) filterList.push('crumbly')
        if (looseFilter) filterList.push('loose')


        if (filterList.length !== 0){
            const results = grounds.filter((product) => {
                const tagNames = product.tags.map((tag) => tag.tag.tagName)
                if (filterList.every(t => tagNames.includes(t))){
                    return product
                }
            })
            setSearchResults(results)
        } else setSearchResults(grounds)

    }, [acidicFilter, alkalineFilter, crumblyFilter, looseFilter])

    const handleFilter = () => {
        setFilter(!filter)
    }

    return (
        <>
            <Navigation sticky={null} fixed={"top"}/>
            <div className={"productsContainer"}>
                <div className={"filterMenu"}>
                    <h3>Filters</h3>
                    <Form>
                        <div key={`checkbox`} className="mb-3">
                            <Form.Check
                                inline
                                label="ACIDIC"
                                name="group1"
                                type={"checkbox"}
                                id={`inline-checkbox-1`}
                                onChange={() => setAcidicFilter(!acidicFilter)}
                            />
                            <Form.Check
                                inline
                                label="ALCALINE"
                                name="group1"
                                type={"checkbox"}
                                id={`inline-checkbox-2`}
                                onChange={() => setAlkalineFilter(!alkalineFilter)}
                            />
                            <Form.Check
                                inline
                                label="CRUMBLY"
                                name="group1"
                                type={"checkbox"}
                                id={`inline-checkbox-3`}
                                onChange={() => setCrumblyFilter(!crumblyFilter)}
                            />
                            <Form.Check
                                inline
                                label="LOOSE"
                                name="group1"
                                type={"checkbox"}
                                id={`inline-checkbox-4`}
                                onChange={() => setLooseFilter(!looseFilter)}
                            />
                        </div>
                    </Form>
                </div>
                <Stack>
                    <div className={"searchFilterContainer"}>
                        <SearchBar products={grounds} setSearchResult={setSearchResults}/>
                        <FontAwesomeIcon onClick={handleFilter} icon={faFilter} className={"filterButton"} size={"lg"}/>
                        {filter ? <div className={"filterMenuSmall"}>
                            <Form>
                                <div key={`checkbox`}>
                                    <Form.Check
                                        inline
                                        label="ACIDIC"
                                        name="group1"
                                        type={"checkbox"}
                                        id={`inline-checkbox-1`}
                                        checked={acidicFilter}
                                        onChange={() => setAcidicFilter(!acidicFilter)}
                                    />
                                    <Form.Check
                                        inline
                                        label="ALKALINE"
                                        name="group1"
                                        type={"checkbox"}
                                        id={`inline-checkbox-2`}
                                        checked={alkalineFilter}
                                        onChange={() => setAlkalineFilter(!alkalineFilter)}
                                    />
                                    <Form.Check
                                        inline
                                        label="CRUMBLY"
                                        name="group1"
                                        type={"checkbox"}
                                        id={`inline-checkbox-3`}
                                        checked={crumblyFilter}
                                        onChange={() => setCrumblyFilter(!crumblyFilter)}
                                    />
                                    <Form.Check
                                        inline
                                        label="LOOSE"
                                        name="group1"
                                        type={"checkbox"}
                                        id={`inline-checkbox-4`}
                                        checked={looseFilter}
                                        onChange={() => setLooseFilter(!looseFilter)}
                                    />
                                </div>
                            </Form>
                        </div> : <></>}

                    </div>
                    <div className={"products"}>
                        <Row style={{width: "auto", margin: 16}}>
                            {searchResults.map((plant, index) => {
                                return <Col className="productColumn col-12 col-sm-6 col-lg-4 col-xl-3">
                                    <Product product={plant} type={"GROUND"}/>
                                </Col>
                            })}
                        </Row>

                    </div>
                </Stack>
            </div>
        </>
    )
}