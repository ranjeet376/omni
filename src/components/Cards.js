import React, { Component } from 'react'
import axios from 'axios';
import {Col, Row, Card,ListGroupItem } from 'react-bootstrap'
export default class Cards extends Component {

    state = {
        details: []
    }

    details() {
        return axios.get(` https://stgapi.omnicuris.com/api/v3/courses/thyroid-in-pregnancy/experts`,
            { headers: { "hk-access-token": "89e684ac-7ade-4cd8-bbdf-419a92f4cc5f" } })
            .then(res => {
                console.log(res.data);
                const details = res.data.expertDetails
                this.setState({ details })
            })
    }
    componentDidMount() {
        this.details();
    }
    render() {

        return (
            <Row>


                {this.state.details ? this.state.details.map((p, i) => {
                    return <Col>

                        <Card className="img-card">
                            <img src={p.profilePic} className="img" ></img>
                            <span>{p.title}{p.expertName} </span>
                            <div><span>{p.qualification}</span></div>
                        </Card>
                    </Col>
                }) : "null"}
            </Row>

        )
    }
}

