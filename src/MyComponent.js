import React, { Component } from "react";

class MyComponent extends Component {
  static defaultProps = {
    name: "defaultName"
  };
  render() {
    return <div>{this.props.name}의 일감</div>;
  }
}

export default MyComponent;
