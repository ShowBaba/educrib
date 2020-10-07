import React, { Component } from "react";

import UserService from "../services/user.service";

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            content: []
        };
    }

    componentDidMount() {
        UserService.getPostsContent()
            .then(res => {
                this.setState({
                    content: res
                });
            });
    }

    render() {
        return (
            <div>{JSON.stringify(this.state.content.data)}</div>
        );
    }
}