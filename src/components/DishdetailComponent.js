import React, { Component } from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

class DishDetail extends Component {

    constructor(props) {
        super(props);
    }

    renderDish(dish) {
        if (dish != null) {
            return (
                <Card key={dish.id}>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }

    renderComments(dish) {
        if (dish != null) {
            const comments = dish.comments;
            return (
                <div key={dish.id}>
                    <h4>Comments</h4>
                    <div className="list-unstyled">
                        {comments.map(comment => {
                            const dateId = new Date(comment.date);
                            return (
                                <li key={comment.id}>
                                    <div><p><strong>{comment.comment}</strong></p></div>
                                    <div><p> -- {comment.author}, {dateId.toLocaleString('default', { month: 'short' })} {dateId.getDate()}, {dateId.getFullYear()}</p></div>
                                </li>
                            );
                        })}
                    </div>
                </div>
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.dish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(this.props.dish)}
                    </div>
                </div>
            </div>
        );
    }
}

export default DishDetail;
