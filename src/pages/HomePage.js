import React, { Component } from 'react'
import axios from 'axios';
import { Row, Col, Container } from 'react-bootstrap'
import VideoPlayer from '../components/VideoPlayer';
import Description from '../components/Description';
import Cards from '../components/Cards';
import ModuleList from '../components/ModuleList';
import SearchBar from '../components/SearchBar';
//import 'font-awesome/css/font-awesome.min.css';

export default class HomePage extends Component {
    state = {
        list: null,
        url: "https://oldassets.omnicuris.com/courses/video/05_07_17_03_01_55__role%20of%20thyroid.mp4"
    }
    componentDidMount() {
        axios.get("https://stgapi.omnicuris.com/api/v3/courses?courseSlug=thyroid-in-pregnancy",
            { headers: { "hk-access-token": "89e684ac-7ade-4cd8-bbdf-419a92f4cc5f" } })
            .then(response => {
                console.log("response... ", response.data.courseDetails.modules)
                this.setState({ list: response.data.courseDetails.modules })
            })
    }
    getVideo = (i) => {
        axios.get(`https://stgapi.omnicuris.com/api/v3/courses?courseSlug=thyroid-in-pregnancy&moduleId=${i}`,
            { headers: { "hk-access-token": "89e684ac-7ade-4cd8-bbdf-419a92f4cc5f" } })
            .then(response => {
                console.log("your video url", response.data.lessonDetails[0].userChapterDetails[0].content)
                this.setState({ url: response.data.lessonDetails[0].userChapterDetails[0].content })
            })
    }
    render() {
        const { list } = this.state;
        return (
            <Container>
                <Row>
                    <SearchBar />
                </Row>
                <Row>
                    <Col md={8} sm={12}>
                        <VideoPlayer url={this.state.url} />
                    </Col>
                    <Col md={4} sm={12}>
                        <ModuleList list={list} getVideo={(i) => this.getVideo(i)} />
                    </Col>
                </Row>
                <Row >

                    <Description />

                </Row>
                <Row>
                    <h1>Expert Pannel</h1>
                    <Cards />

                </Row>
            </Container>
        )
    }
}
//