import { Badge, Button, Col, Container, Form, Row, Spinner } from "react-bootstrap";
import { NavComp } from "../../components/Navbar";
import { useState } from "react";
import axios from "axios";

const REQUEST_URL = 'https://catfact.ninja/fact';

export function SecondTaskPage() {
    const [validated, setValidated] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [catFact, setFact] = useState({ fact: '', length: 0 });

    const getCatFact = async () => {
        const { data } = await axios(REQUEST_URL);

        if (!data || data.length === 0) {
            setLoading(false);
            return {};
        }

        setFact(catFact => ({
            ...catFact,
            ...data
        }))

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
            <NavComp />
            <Container className='mt-4'>
                <Row className="g-4">
                    {
                        isLoading &&
                        <Spinner animation="border" variant="success" />
                    }
                    {
                        !isLoading &&
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <Row>
                                <Col>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Col>
                                <Col>
                                    <Form.Control type="password" placeholder="Password" />
                                </Col>
                                <Col >
                                    <Form.Check type="checkbox" label="Check me out" />
                                </Col>
                                <Col>
                                    <Button variant="primary" type="submit" onClick={() => { return }}>
                                        Submit
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    }
                </Row>
                {
                    <Row className="mt-2 g-4" style={{ visibility: "hidden" }}>
                        <p style={{ color: "white" }}>{catFact.fact} <Badge >{catFact.length}</Badge></p>
                    </Row>
                }
            </Container>
        </>
    )
}