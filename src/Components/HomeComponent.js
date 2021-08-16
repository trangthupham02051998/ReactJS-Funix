import React from "react";
import { Container, Col, Row, Card, CardImg, Nav } from "react-bootstrap";
import Footer from "./FooterComponent";
import Header from "./HeaderComponent";
import { STAFFS } from "../staffs";

export default function Home() {
  const baseUrl = "http://localhost:3000";
  return (
    <div>
      <Header />
      <Container>
        <Row>
          {STAFFS.map((item, key) => {
            return (
              <Col lg={2} md={4} sm={6} className="item-staff">
                <Card>
                  <a href={"/staff/" + item.id}>
                    <CardImg
                      variant="top"
                      alt={item.name}
                      src={baseUrl + item.image}
                    />
                  </a>
                  <Card.Body>
                    <a href={"/staff/" + item.id}>
                      <Card.Title>{item.name}</Card.Title>
                    </a>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
      <Footer />
    </div>
  );
}
