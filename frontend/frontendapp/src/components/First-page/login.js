import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./main.css";

export default class First extends Component {
  state = {
    credentials: { username: "", password: "" },
  };

  Login = (event) => {
    fetch('http://127.0.0.1:8000/auth/', {
      method: "POST",
      headers: {"Content-Type": 'application/json'},
      body: JSON.stringify(this.state.credentials)
    })
    .then( data => data.json())
    .then(
      data => {
        this.props.userLogin(data.token);
      }
    ).catch(error => console.error(error));
  };

  Register = (event) => {
    fetch('http://127.0.0.1:8000/api/users/', {
      method: "POST",
      headers: {"Content-Type": 'application/json'},
      body: JSON.stringify(this.state.credentials)
    })
    .then( data => data.json())
    .then(
      data => {
        console.log(data.token);
      }
    ).catch(error => console.error(error));
  };

  inputChanged = event => {
    const cred = this.state.credentials;
    cred[event.target.name] = event.target.value;
    this.setState({credentials: cred})

  }

  render() {
    return (
      <div className="page" style={{ textAlign: "center" }}>
        <Container>
          <Row>
            <Col className="right-one" xs={12}>
              <h2>Login User form</h2>
              <label>
                <input
                  placeholder="username"
                  type="text"
                  name="username"
                  value={this.state.credentials.username}
                  onChange={this.inputChanged}
                />
              </label>
              <br />
              <label>
                <input
                  placeholder="password"
                  type="password"
                  name="password"
                  value={this.state.credentials.password}
                  onChange={this.inputChanged}
                />
              </label>
              <br />
              <button onClick={this.Login} type="submit ">Login</button>
              <button onClick={this.Register} type="submit ">Register</button> 
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
