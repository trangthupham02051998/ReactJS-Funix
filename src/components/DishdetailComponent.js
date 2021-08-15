import React from 'react';
import {Card, CardBody, CardImg, CardText, CardTitle} from "reactstrap";
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';


function renderDish(dish) {
    if (dish != null)
        return (
            <Card>
                <CardImg top src={baseUrl + dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    else
        return (
            <div></div>
        );
}

function RenderComments({comments, addComment, dishId}) {
    if (comments != null) {
        return (
            <div>
                <div><strong>Comment</strong></div>
                {comments.map(c => {
                    return <div>
                        <div>{c.comment}</div>
                        <div>-- {c.author}, {new Intl.DateTimeFormat('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: '2-digit'
                        }).format(new Date(Date.parse(c.date)))}
                        </div>
                    </div>
                })}
            </div>
        )
    } else {
        return null
    }
}


const DishDetail = (props) => {
    //Return về div để không lỗi
    const comments = props.dish != null ? props.dish.comments : null;
    if (props.isLoading) {
        return(
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.errMess) {
        return(
            <div className="container">
                <div className="row">
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        );
    }
    else if (props.dish != null)  {
        return (
            <div className={'container'}>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {renderDish(props.dish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {props.dish?.name ? <div>{props.dish?.name}</div> : null}
                        <RenderComments comments={comments} addComment={props.addComment}
                                        dishId={props.dish.id}/>
                    </div>
                </div>
            </div>


        )
    }

}

export default DishDetail;