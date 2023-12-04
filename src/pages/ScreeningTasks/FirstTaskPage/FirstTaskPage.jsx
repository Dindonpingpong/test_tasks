import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { NavComp } from "../../../components/Navbar";
import { useState } from "react";
import { screening_links, stages_links } from "../../../constants/links";


export function FirstTaskPage() {
    const [price, setPrice] = useState('');
    const [result, setResult] = useState('')


    const checkPrice = async () => {
        console.log(price);
        if (isNaN(price)) setResult('Oooops...')
        if (price < 0) setResult('-200');
        if (price >= 0) setResult('350');
        if (price > 1000) setResult('150');
        if (price > 3000) setResult('0');
    }

    const handleSubmit = async (event) => {
        await event.preventDefault();
        await checkPrice();
    };

    return (
        <>
            <NavComp links={stages_links}/>
            <NavComp links={screening_links}/>
            <Container className='mt-4'>
                <Row className="g-4">
                    <Form noValidate onSubmit={handleSubmit}>
                        <Row>
                            <Col>
                                <Form.Control type="text" onChange={e => setPrice(e.target.value)} />
                            </Col>
                            <Col>
                                <Button variant="primary" type="submit" onClick={() => { return }}>
                                    Check
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Row>
                <Row className="mt-2 g-4">
                    <p style={{ color: "white" }}>{result}</p>
                </Row>
            </Container>
        </>
    )
}