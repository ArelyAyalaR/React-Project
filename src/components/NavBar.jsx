import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { CartWidget } from './CartWidget';

export const NavBar = () => {
    return (<>
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Nav.Link to="/" as={NavLink}>GameWorld</Nav.Link>
                <Nav className="me-auto">
                    <Nav.Link to="/category/Adventure" as={NavLink}>Adventure</Nav.Link>
                    <Nav.Link to="/category/Action" as={NavLink}>Action</Nav.Link>
                </Nav>
                <CartWidget />
            </Container>
        </Navbar>
    </>
    );
};