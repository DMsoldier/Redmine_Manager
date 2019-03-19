import React, { Component } from "react";
import * as request from "request";
var request1 = require("request");
class MyComponent extends Component {
  static defaultProps = {
    name: "defaultName"
  };
  state = {
    redmines: ""
  };
  constructor(props) {
    super(props);
    this.getRedmine = this.getRedmine.bind(this);
  }
  getRedmine() {
    var OPTIONS = {
      headers: { "Content-Type": "application/json" },
      url: null,
      body: null
    };
    var redHost = "http://redmine.somansa.com/redmine/issues.json";
    var state = "";
    OPTIONS.url = redHost;
    request.get("http://redmine.somansa.com/redmine/issues.json", function(
      err,
      res,
      result
    ) {
      state = res;
    });
    this.setState({
      redmines: state
    });
  }
  render() {
    return (
      <div>
        <div>{this.props.name}의 일감</div>
        <li>일감 : {this.state.redmines}</li>
        <button type="button" name="btn_getRed" onClick={this.getRedmine}>
          get
        </button>
      </div>
    );
  }
}

export default MyComponent;
