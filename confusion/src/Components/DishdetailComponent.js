import { Component } from 'react';
import {
    Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle
} from 'reactstrap';
class DishDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dish: null
        };
    }
    renderDish(dish) {
        if (dish != null)
            return (
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
                        {this.renderComments(dish.comments)}
                    </div>
                </div>

            );
        else {
            return (
                <div></div>
            );
        }
    }
    renderComments(comments) {
        if (comments != null) {
            const commentsList = comments.map((comment) => {
                var date = new Date(comment.date);
                return (
                    <li key={comment.id}><p>{comment.comment}</p>
                        <p>-- {comment.author}, {this.getDate(comment.date)}</p>
                    </li>
                );
            });

            return (
                <div>
                    <h4>Comments</h4>
                    <ul class="list-unstyled">
                        {commentsList}
                    </ul>
                </div>
            );
        } else {
            return (
                <div></div>
            );
        }
    }
    getDate(date) {
        var today = new Date(date)
        var month = today.toLocaleString('default', { month: 'short' })
        var day = today.getDay();
        var year = today.getFullYear();
        return (<>,{month} {day} {year}</>)
    }
    render() {
        return (
            this.renderDish(this.props.selectedDish)
        );


    }
}
export default DishDetail;
