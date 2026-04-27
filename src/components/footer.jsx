import React, { Component } from "react";

class FooterClass extends Component {
  style = {
    color: 'blue',
    fontSize: '24px',
    textAlign: 'center',
    marginTop: '20px',
  };
  constructor() {
    super();
    this.state = {
      name: 'Ahmed elbehiry',
    };
  }
  render() {
    return (
      <div style={this.style}>
        <h1>Hello from Footer Class Component</h1>
        <h1>This is Made by {this.state.name}</h1>
      </div>
    );
  }
}

export default FooterClass;