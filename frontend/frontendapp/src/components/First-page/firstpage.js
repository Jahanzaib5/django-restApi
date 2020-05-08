import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./main.css";

function First() {
  return (
    <div className="page">
      <Container>
        <Row>
          <Col className="right-one" xs={12}>
            <h2>hello</h2>
            <p>This is the first page</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default First;
