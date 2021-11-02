import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle
} from 'reactstrap';


function RenderDish({ dish }) {
    if (dish != null)
        return (    
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg top src={dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={dish.comments}></RenderComments>
                    </div>
                </div>
            </div>

        );
    else {
        return (
            <div></div>
        );
    }
}
function RenderComments({ comments }) {
    if (comments != null) {
        const commentsList = comments.map((comment) => {
            var date = new Date(comment.date);
            return (
                <li key={comment.id}><p>{comment.comment}</p>
                    <p>-- {comment.author}, {getDate(comment.date)}</p>
                </li>
            );
        });

        return (
            <>
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {commentsList}
                </ul>
            </>
        );
    } else {
        return (
            <div></div>
        );
    }
}
function getDate(date) {
    var today = new Date(date)
    var month = today.toLocaleString('default', { month: 'short' })
    var day = today.getDay();
    var year = today.getFullYear();
    return (<>,{month} {day} {year}</>)
}
const DishDetail = (props) => {
    return (
        <RenderDish dish={props.dish}></RenderDish>
    );


}
export default DishDetail;
