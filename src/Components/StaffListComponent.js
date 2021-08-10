import React from 'react';
import {Button, Row, Col} from 'react-bootstrap';


class StaffList extends  React.Component
{
    constructor(props) {
        super(props);
        this.staffListData = this.props.staffListData
    }

     handleClick = (item) =>{
        this.props.handleClickApp(item);
    }

    render()
    {
        return (
            <Row>
                {this.staffListData.map((item, key) => {
                    return (
                        <Col key={key} md={4} sm={12} lg={6}>
                            <Button onClick={() => {this.handleClick(item)}}>{item.name}</Button>
                        </Col>
                    )
                })}
            </Row>
        );
    }
}

export  default  StaffList;