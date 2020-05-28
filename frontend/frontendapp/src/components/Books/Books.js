import React, { Component } from "react";

export default class Books extends Component {
  state = {
    books: []
  }

  loadBooks = () => {
    fetch("http://127.0.0.1:8000/api/books/", {
      method: "GET",
      headers: {
        'Content-Type': 'applicaiton/json',
        Authorization: `Token ${this.props.token}`
      },
      body: JSON.stringify(this.state.credentials),
    })
      .then((data) => data.json())
      .then((data) => {
        this.setState({ books: data });
      })
      .catch((error) => console.error(error));
  };

  render() {
    return (
      <div style={{ textAlign: "center" }} className="container">
        <h1>This will be the book section</h1>
        {this.state.books.map((book) => {
          return <h3 key={book.id}><a href="#">{book.title}</a></h3>
        })}
        <button onClick={this.loadBooks}>Load Books</button>
      </div>
    );
  }
}
