import { Container } from "react-bootstrap";
import { NavComp } from "../../components/Navbar";
import { stages_links, tech_links } from "../../constants/links";


export function TechStagePage() {
    return (
        <>
            <NavComp links={stages_links}/>
            <NavComp links={tech_links}/>
            <Container className='mt-4'>
               Welcome to tech stage!
            </Container>
        </>
    )
}