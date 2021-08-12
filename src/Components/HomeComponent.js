import React from 'react';
import {
    Navbar,
    Nav,
    Container,
    Col,
    Row,
    Card
} from 'react-bootstrap';
import Footer from "./FooterComponent";


export default function Home()
{
       return(
           <div>
           <Navbar bg="light" expand="lg">
               <Container>
                   <Navbar.Brand href="#home">ASM2</Navbar.Brand>
                   <Navbar.Collapse id="basic-navbar-nav">
                       <Nav className="me-auto">
                           <Nav.Link href="/nhan-vien">Nhân Viên</Nav.Link>
                           <Nav.Link href="/phong-ban">Phòng Ban</Nav.Link>
                           <Nav.Link href="/bang-luong">Bảng Lương</Nav.Link>
                       </Nav>
                   </Navbar.Collapse>
               </Container>
           </Navbar>

            <Container>
                <Row>
                    <Col lg={2} md={4} sm={6}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="../../Assets/alberto.png" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
           <Footer/>
           </div>
       );
}
