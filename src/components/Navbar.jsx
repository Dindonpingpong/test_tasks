import { React } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

export function NavComp() {
    const params = useLocation();
    const currentPath = params.pathname;

    const nav_links = [
        {
            id: 'first_task',
            href: '/',
            title: 'First task',
        },
        {
            id: 'second_task',
            href: '/second',
            title: 'Second task',
        },
        {
            id: 'third_task',
            href: '/third',
            title: 'Third task',
        },
        {
            id: 'fourth_task',
            href: '/fourth',
            title: 'Fourth task',
        },
    ]

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
                        {nav_links.map((item) => (
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