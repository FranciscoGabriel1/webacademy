import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/netflix.png";

function CustomNavbar() {
  return (
    <Navbar
      expand="lg"
      className=" fixed-top"
      style={{ padding: 0, backgroundColor: "#141414" }}
    >
      <Container fluid style={{ padding: 0 }}>
        <NavLink to="/">
          <img
            src={Logo}
            alt="Netflix Logo"
            height="70" // Ajuste a altura conforme necessário
            className="d-inline-block align-top"
          />
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/">
              <Nav.Link href="#link" style={{ color: "white" }}>
                Home
              </Nav.Link>
            </NavLink>
            <NavLink to="/recomendacoes">
              <Nav.Link href="#link" style={{ color: "white" }}>
                Recomendacoes
              </Nav.Link>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
