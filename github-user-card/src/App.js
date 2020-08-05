import React, { Component } from "react";
import axios from "axios";
import UserCard from "./UserCard.jsx";
import "./App.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      user: "roboblox",
      userData: {},
      userFollowers: [],
    };
  }
  componentDidMount() {
    axios
      .get(`https://api.github.com/users/${this.state.user}`)
      .then((res) => {
        this.setState({
          userData: res.data,
        });
        console.log(res.data);
        console.log(this.state.userData);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(`https://api.github.com/users/${this.state.user}/followers`)
      .then((res) => {
        this.setState({
          userFollowers: res.data,
        });
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <div>
        <UserCard
          user={this.state.userData}
          followers={this.state.userFollowers}
        />
      </div>
    );
  }
}
