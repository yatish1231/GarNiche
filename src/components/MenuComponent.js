import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText, CardImgOverlay, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';

function RenderMenuItem({ dish }) {
    return (
        <Card key={dish.id} tag="li">
            <Link to={`/menu/${dish.id}`}>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}

const Menu = (props) => {

    const menu = props.dishes.dishes.map((dish) => {
        if (props.dishes.isLoading) {
            return (
                <Loading/>
            );
        }
        else if (props.dishes.errMess) {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h4>{props.dishes.errMess}</h4>
                        </div>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div className="col-12 col-md-5 m-1">
                    <RenderMenuItem dish={dish} />
                </div>
            );
        }
    });

    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to="/home">Home</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>Menu
                        {/* <Link to="/menu">Menu</Link> */}
                    </BreadcrumbItem>
                    <div className="col-12">
                        <h3>Menu</h3>
                        <hr />
                    </div>
                </Breadcrumb>
            </div>
            <div className="row justify-content-center">
                {menu}
            </div>
        </div>
    );

}

export default Menu;