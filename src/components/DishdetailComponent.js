import React, { Component } from "react";
import { Card, CardImg, CardBody, CardTitle, CardText, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { LocalForm, Control, Errors } from 'react-redux-form';
import { Loading } from './LoadingComponent';

function RenderDish({ dish }) {
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

function RenderComments({ comments, addComment, dishId }) {
    if (comments != null) {
        return (
            <div>
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
                <CommentForm addComment={addComment} dishId={dishId} />
            </div>
        );
    }
    else {
        return (
            <div></div>
        );
    }
}
function DishDetail(props) {
    if (props.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        )
    }
    else if (props.errMess) {
        return (
            <div className="container">
                <div className="row">
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        )
    }
    else if (props.dish != null) {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-12 col-md-5 m-1">
                        {/* {renderDish(props.dish)} */}
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.comments} addComment={props.addComment} dishId={props.dish.id} />
                        {/* {renderComments(props.comments, props.addComment, props.dish.id)} */}
                    </div>
                </div>
            </div>
        );
    }
}

export default DishDetail;

// Comment Form
const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && ((val.length >= len) && !(val.length < 1));

class CommentForm extends Component {


    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: false
        };
        this.toggleModal = this.toggleModal.bind(this);
    }


    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    onSubmit(values) {
        this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);
    }

    render() {
        return (
            <div>
                <button className="btn btn-outline-dark" onClick={this.toggleModal}>
                    <span><i class="fa fa-comment-o"></i></span> Submit Comment
                </button>
                <div className="container">
                    <Modal isOpen={this.state.isModalOpen}>
                        <ModalHeader toggle={this.toggleModal}>
                            Comment Form
                        </ModalHeader>
                        <ModalBody>
                            <LocalForm onSubmit={(values) => this.onSubmit(values)}>
                                <div className="form-group">
                                    <label htmlFor="rating">Rating</label>
                                    <Control.select id="rating" model=".rating" name="rating" className="form-control">
                                        {[...Array(5)].map((x, i) =>
                                            <option>{i + 1}</option>
                                        )}
                                    </Control.select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name">Your name</label>
                                    <Control.text id="name" model=".author" name="author"
                                        className="form-control"
                                        placeholder="Enter your full name"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                    />
                                    <Errors
                                        model=".author"
                                        className="form-control-feedback text-danger"
                                        show="touched"
                                        messages={{
                                            required: 'This field is required ',
                                            maxLength: 'Maximum 15 characters ',
                                            minLength: 'Minimum 3 characters'
                                        }}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="comment">Comment</label>
                                    <Control.textarea id="comment" model=".comment" name="comment"
                                        className="form-control" rows='6'
                                        placeholder="type your comment..." />
                                </div>
                                <div className="justify-content-center row">
                                    <button type="submit" className="col-4 btn btn-primary">
                                        Submit
                                </button>
                                </div>
                            </LocalForm>
                        </ModalBody>
                    </Modal>
                </div>
            </div>
        );
    }

}