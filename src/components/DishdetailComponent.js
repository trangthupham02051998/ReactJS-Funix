import React from 'react';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';
import {Card, CardBody, CardImg, CardText, CardTitle} from "reactstrap";
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import CommentForm from './CommentFormComponent'


function renderDish(dish) {
    if (dish != null)
        return (
            <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
            <Card>
                <CardImg top src={baseUrl + dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
            </FadeTransform>
        );
    else
        return (
            <div></div>
        );
}

function RenderComments({comments, postComment, dishId}) {
    const post = (rating, author, comment) => {
        postComment(dishId, rating, author, comment);
    }
    if (comments != null) {
        return (
            <div>
                <CommentForm postComment={post} />
                <div><strong>Comment</strong></div>
                <Stagger in>
                        {comments.map((comment) => {
                            return (
                                <Fade in>
                                <li key={comment.id}>
                                <p>{comment.comment}</p>
                                <p>-- {comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                                </li>
                                </Fade>
                            );
                        })}
                        </Stagger>
            </div>
        )
    } else {
        return null
    }
}


const DishDetail = (props) => {
    console.log('comment', props)
    //Return về div để không lỗi
    const comments = props.comments != null ? props.comments : null;
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
                        <RenderComments comments={comments} postComment={props.postComment}
                                        dishId={props.dish.id}/>
                    </div>
                </div>
            </div>


        )
    }

}

export default DishDetail;