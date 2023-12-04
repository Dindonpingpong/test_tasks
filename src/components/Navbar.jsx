import { React } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";


export function NavComp(props) {
    const params = useLocation();
    const currentPath = params.pathname;

    return (
        <Navbar
            className="navbar"
            expand="lg"
            style={{ position: "sticky", height: "fit-content", top: 0, zIndex: 2 }}
        >
            <Container>
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0 d-flex gap-3"
                        style={{ maxHeight: "100px" }}
                        navbarScroll
                    >
                        {props.links.map((item) => (
                            <Link
                                key={item.id}
                                to={item.href}
                                style={{
                                    color: currentPath === item.href ? "white" : "#afafaf",
                                    display: "flex",
                                    alignItems: "center",
                                    fontWeight: currentPath === item.href ? "bold" : "medium",
                                }}
                            >
                                {item.title}
                            </Link>
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default { NavComp };