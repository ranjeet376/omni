import React, { Component } from 'react'
import axios from 'axios';
import { Col } from 'react-bootstrap'
export default class Description extends Component {
    state = {
        description: null
    }

    description() {
        axios.get(`https://stgapi.omnicuris.com/api/v3/courses?courseSlug=thyroid-in-pregnancy`,
            { headers: { "hk-access-token": "89e684ac-7ade-4cd8-bbdf-419a92f4cc5f" } })
            .then(res => {

                const description = res.data.courseDetails.description
                //console.log("maaaaaaaa..", description);

                this.setState({ description })
            }).catch(err => {
                if (err) {
                    console.log(err.response);

                }
                console.log('pass error', err)
            })

    }
    componentDidMount() {
        this.description()
    }

    render() {
        const { description } = this.state;
        return (
            <Col md={8} className="description-div">
                <h1>Description and details</h1>
                <div className="line"> <hr className="hr" /> </div>
                <p>{description}</p>
            </Col>
        )
    }
}


