import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle} from 'reactstrap';
import {Loading} from './LoadingComponent';
import {baseUrl} from '../shared/baseUrl';
import { FadeTransform } from 'react-animation-components'

function RenderCard({item, isLoading, errMess}) {

    if (isLoading) {
        return(
                <Loading />
        );
    }
    else if (errMess) {
        return(
                <h4>{errMess}</h4>
        );
    }
    return(
        <FadeTransform in 
            transformProps={{
                existTransform: 'scale(0.5) translateY(-50%)'
            }}>
        <Card>
            <CardImg src={baseUrl + item.image} alt={item.name} />
            <CardBody>
            <CardTitle>{item.name}</CardTitle>
            {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null }
            <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
        </FadeTransform>
    );

}

function Home(props) {
    return(
        <div className="container-fluid">
            <div className="row align-items-start">
                <div className="col-6 p-0 m-0" id="main-description">
                    <h1 style={{height: 100}}>hi</h1>
                </div>
                <div className="col-6 p-0 m-0">
                    <img src="/garniche_logo.png" className="img img-fluid" id="main-img"/>
                </div>

                {/* <div className="col-12 col-md m-1">
                    <RenderCard item={props.dish} 
                    isLoading={props.dishesLoading}
                    errMess={props.dishesErrMess} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.promotion} 
                        isLoading={props.promosLoading}
                        errMess={props.promosErrMess}/>
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.leader} 
                    isLoading={props.leadersLoading}
                    errMess={props.leadersErrMess}/>
                </div> */}
            </div>
        </div>
    );
}

export default Home;