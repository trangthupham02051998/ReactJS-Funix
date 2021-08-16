import React from "react";

import { Navbar, Nav, Container } from "react-bootstrap";


export default function Header() {
  return (
   
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">ASM2</Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/nhan-vien">Nhân Viên</Nav.Link>
              <Nav.Link href="/phong-ban">Phòng Ban</Nav.Link>
              <Nav.Link href="/bang-luong">Bảng Lương</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
 
  );
}
