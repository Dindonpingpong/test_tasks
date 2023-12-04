import { Col, Container, Row, } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import { NavComp } from "../../../components/Navbar";
import { useState } from "react";
import axios from "axios";
import { screening_links, stages_links } from "../../../constants/links";

const REQUEST_URL = 'https://catfact.ninja/fact';

export function SecondTaskPage() {
    const [validated, setValidated] = useState(false);
    const [isLoading, setLoading] = useState(false);

    const getCatFact = async () => {
        const { data } = await axios(REQUEST_URL);

        if (!data || data.length === 0) {
            setLoading(false);
            return {};
        }

        setLoading(false);
    }

    const handleSubmit = async (event) => {
        await event.preventDefault();
        setLoading(true)
        await getCatFact()
        setValidated(true);
    };

    return (
        <>
            <NavComp links={stages_links} />
            <NavComp links={screening_links} />
            <Container className='mt-4'>
                <Row className="g-4">
                    <Form>
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label for="exampleSelect">
                                        Location
                                    </Form.Label>
                                    <Form.Select>
                                        <option>MSC</option>
                                        <option>SPB</option>
                                        <option>NV</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label for="exampleSelect">
                                        Delivery scheme
                                    </Form.Label>
                                    <Form.Select>
                                        <option>FBO</option>
                                        <option>FBS</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label for="exampleSelect">
                                        Category
                                    </Form.Label>
                                    <Form.Select>
                                        <option>liquid</option>
                                        <option>tech</option>
                                        <option>expirable</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                        </Row>
                    </Form>
                </Row>
            </Container>
        </>
    )
}