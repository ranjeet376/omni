import React from "react";
import { Col } from "react-bootstrap";

const SearchBar = () => {
    return (
        <Col md="8" className="search-box">
            <div className="active-pink-3 active-pink-4 mb-4">
                <input className="form-control" type="text" placeholder="Thyroid in Pregnancy:" aria-label="Search" />
            </div>
        </Col>
    );
}

export default SearchBar;