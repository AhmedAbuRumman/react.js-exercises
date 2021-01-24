import React from 'react';
import { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card } from 'react-bootstrap';

const trainee = (props) => {
    return (
        /*  <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.img} />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>  */
        <div className="card hovercard">
            <div className="cardheader">

            </div>
            <div className="avatar">
                <img alt="" src={props.img} />
            </div>
            <div className="info">
                <div className="title">
                    <a target="_blank" href="#">{props.name}</a>
                </div>
                <div className="desc">Trainee </div>
                <div className="desc">Coding Acadmey by Orange</div>

            </div>
            <div className="bottom">
                <a className="btn btn-danger btn-sm mx-1" rel="publisher"
                    href={props.linkedin} target="_blank">
                    <i class="fa fa-linkedin"></i>
                </a>
                <a className="btn btn-primary btn-twitter btn-sm mx-1" href={props.twitter} target="_blank">
                    <i className="fa fa-twitter"></i>
                </a>

                <a className="btn btn-primary btn-sm mx-1" rel="publisher"
                    href={props.facebook} target="_blank">
                    <i class="fa fa-facebook"></i>
                </a>
                <a className="btn btn-warning btn-sm" rel="publisher" href={props.github} target="_blank">
                    <i class="fa fa-github"></i>
                </a>
            </div>
        </div>


    )
}
export default trainee;