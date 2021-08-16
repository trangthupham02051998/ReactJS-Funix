import React, { useState } from "react";
import { Breadcrumb, BreadcrumbItem, CardImg,Col, Container, Row } from "react-bootstrap";
import { STAFFS } from "../staffs";
import Footer from "./FooterComponent";
import Header from "./HeaderComponent";

export default function StaffDetail(props) {
const [staffInfo, setStaffInfo] = useState([]);



  return (
    <div>
        <Header/>
      <Breadcrumb>
        <BreadcrumbItem>
          <a href="/nhan-vien">Nhân viên</a>
        </BreadcrumbItem>
        <BreadcrumbItem active>Id Nhân viên: {props.match.params.id}</BreadcrumbItem>
      </Breadcrumb>

      <Container>
        <Row>
            <Col lg={2}>
                {/* <CardImg /> */}
            </Col>
            <Col lg={10}>
                <p><b>Họ và tên:</b></p>
                <p>Ngày sinh:</p>
                <p>Ngày sinh:</p>
                <p>Ngày sinh:</p>
                <p>Ngày sinh:</p>
                <p>Ngày sinh:</p>
            </Col>
        </Row>
      </Container>
      <Footer/>

    </div>
  );
}
