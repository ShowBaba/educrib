import React, { Component } from "react";

import UserService from "../services/user.service";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: [],
    };
  }

  componentDidMount() {
    UserService.getPostsContent().then((res) => {
      this.setState({
        content: JSON.stringify(res.data),
      });
    });
  }

  render() {
    return (
      // TODO: parse each post object into seperate containers with each fields correctly visualized as done in a twitter posts feed

      <div>
        <h2 className="font-bold text-center">Available Posts</h2>
        {this.state.content}
      </div>
    );
  }
}
