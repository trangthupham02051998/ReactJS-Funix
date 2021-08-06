import  {Row,Col,Button} from 'react-bootstrap';
import {StaffData} from '../staffJSON.js';
import React from "react";



export const Staff = ({staffInfo}) => {

    const onClickButton = (item) => {
        staffInfo(item);
    }

    return (
        <>
        {StaffData.map((item,key) => {
            return (
                <Col key={key} lg={6}>
                    <Button onClick={onClickButton(item)}>{item.FullName}</Button>
                </Col>
                )
        })}
        </>
    )
};