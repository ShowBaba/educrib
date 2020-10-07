import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import UserService from "../services/user.service";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.handlePost = this.handlePost.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeContent = this.onChangeContent.bind(this);

    this.state = {
      title: "",
      content: "",
      loading: false,
      message: "",
    };
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value,
    });
  }

  onChangeContent(e) {
    this.setState({
      content: e.target.value,
    });
  }

  handlePost(e) {
    e.preventDefault();

    this.setState({
      message: "",
      loading: true,
    });

// TODO: add validation to input fields

    UserService.makePost(this.state.title, this.state.content).then(
      () => {
        this.props.history.push("/home");
        window.location.reload();
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        this.setState({
          loading: false,
          message: resMessage,
        });
      }
    );

  }

  render() {
    return (
      <div className="col-md-12">
      <h2 className= "font-bold text-center">Create a post</h2>
        <div className="card card-container">
          <Form
            onSubmit={this.handlePost}
            ref={(c) => {
              this.form = c;
            }}
          >
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <Input
                type="text"
                className="form-control"
                name="title"
                value={this.state.title}
                onChange={this.onChangeTitle}
                validations={[required]}
              />
            </div>

            <div className="form-group">
              <label htmlFor="content">Content</label>
              <textarea
                rows="3"
                type="text"
                className="form-control"
                name="content"
                value={this.state.content}
                onChange={this.onChangeContent}
                validations={[required]}
              />
            </div>

            <div className="form-group">
              <button
                className="btn btn-primary btn-block"
                disabled={this.state.loading}
              >
                {this.state.loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>Post</span>
              </button>
            </div>

            {this.state.message && (
              <div className="form-group">
                <div className="alert alert-danger" role="alert">
                  {this.state.message}
                </div>
              </div>
            )}
            <CheckButton
              style={{ display: "none" }}
              ref={(c) => {
                this.checkBtn = c;
              }}
            />
          </Form>
        </div>
      </div>
    );
  }
}
