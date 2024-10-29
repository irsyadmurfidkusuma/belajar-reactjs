import React from "react"
import NavbarEx from 'react-bootstrap/Navbar'
import { Nav, Container } from "react-bootstrap"


function NavbarComp(props) {
    return (
        <div>
            {/* Belajar componet dan props */}
            {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <ul>
                    <li><a href="#">{props.navHeader}</a></li>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">{props.navContact}</a></li>
                </ul>
            </nav> */}



            {/* Belajar  state */}
            <NavbarEx>
                <Container>
                    <Navbar.Brand href="#home">Home</Navbar.Brand>
                    <Nav.Link href="#home">Home</Nav.Link>

                </Container>
            </NavbarEx>
        </div>
    )
}

export default NavbarComp