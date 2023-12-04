import { Container } from "react-bootstrap";
import { NavComp } from "../../components/Navbar";
import { screening_links, stages_links } from "../../constants/links";


export function ScreeningStagePage() {
    return (
        <>
            <NavComp links={stages_links}/>
            <NavComp links={screening_links}/>
            <Container className='mt-4'>
               Welcome to screening stage!
            </Container>
        </>
    )
}