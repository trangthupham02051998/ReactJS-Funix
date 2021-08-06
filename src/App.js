import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Container, Row, Col} from 'react-bootstrap';
import {useState} from "react";
import {StaffData} from "./staffJSON";

function App() {


    const [staffInfo, setStaffInfo] = useState([]);


    const onSetStaffInfo = (item) => {
        setStaffInfo(item);
    }
    return (
        <Container>
            <Row>
                <Col lg={12}>
                    <div className="header">
                        Ứng dụng quản lý nhân sự
                    </div>
                </Col>
            </Row>
            <Row>
                {/*<Staff staffInfo={onSetStaffInfo} />*/}
                {StaffData.map((item, key) => {
                    return (
                        <Col key={key} md={4} sm={12} lg={6}>
                            <Button onClick={() => {
                                onSetStaffInfo(item)
                            }}>{item.FullName}</Button>
                        </Col>
                    )
                })}
            </Row>
            <Row>
                <Col lg={6} md={12} sm={12}>
                    <div className="box-information">
                        <p>FullName: <span> {staffInfo.FullName}</span></p>
                        <p>BornDays: <span> {staffInfo.BornDays}</span></p>
                        <p>Deparments: <span> {staffInfo.Deparments}</span></p>
                        <p>LeaveDaysLeft: <span>{staffInfo.LeaveDaysLeft}</span></p>
                        <p>WorkDaysMore:<span>{staffInfo.WorkDaysMore}</span></p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default App;
