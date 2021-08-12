import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';
import {useState} from "react";
import {STAFFS} from "./staffs";
import StaffList from "./Components/StaffListComponent";
import dateFormat from 'dateformat';
//Default
function App() {

    //Khoi tao bien - khoi tao object - kieu du lieu array
    //Ten bien, ham khoi tao bien
    const [staffInfo, setStaffInfo] = useState([]);
    const [flag,setFlag] = useState(false);

    // Khoi tao function - set value cho staffInfo
    const onSetStaffInfo = (item) => {
        if(item != null && item.name != undefined)
        {
            setFlag(true);
            setStaffInfo(item);
        }else {
            setFlag(false);
        }
    }
    // JSX dinh dang reactJS
    return (
        <Container>
            <Row>
                <Col lg={12}>
                    <div className="header">
                        Ứng dụng quản lý nhân sự
                    </div>
                </Col>
            </Row>
                <StaffList handleClickApp={onSetStaffInfo} staffListData={STAFFS}/>
            {/*item la object trong staffJson*/}
            <Row>
                {/*lay du lieu tu staffInfo*/}
                {flag ?
                    <Col lg={6} md={12} sm={12}>
                        <div className="box-information">
                            <p>FullName: <span> {staffInfo.name}</span></p>
                            <p>BornDays: <span> {dateFormat(staffInfo.doB, "dd/MM/yyyy")}</span></p>
                            <p>Deparments: <span> {staffInfo.department.name}</span></p>
                            <p>LeaveDaysLeft: <span>{staffInfo.annualLeave}</span></p>
                            <p>WorkDaysMore:<span>{staffInfo.overTime}</span></p>
                        </div>
                    </Col>
                    :
                    <p>Hãy click vào xem thông tin nhân viên </p>
                }



            </Row>
        </Container>
    );
}

export default App;
