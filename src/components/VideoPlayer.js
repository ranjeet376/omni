import React, { Component } from 'react'
//import axios from 'axios';
import { Row, Col, Container } from 'react-bootstrap'

export default class VideoPlayer extends Component {


    render() {
        const { url } = this.props;
        return (
            <Container>
                <Row>
                    <Col><iframe className="vedio-frame" src={url}
                        frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe></Col>
                </Row>

            </Container>


        );
    }
}
