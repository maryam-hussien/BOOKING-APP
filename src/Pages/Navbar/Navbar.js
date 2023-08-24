import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

function NavBar() {
  return (
   
      <Navbar  expand="lg" className="bg-body-primary px-5 d-flex justify-content-between" bg="primary" data-bs-theme="dark" >
        <Container>
          <Navbar.Brand href="#home">LamaBooking</Navbar.Brand>
          <div className="ms-auto">
            <Button variant="light">Register</Button>{" "}
            <Button variant="light">Login</Button>{" "}
          </div>
        </Container>
      </Navbar>
   
  )
}

export default NavBar;
