import React, { Component } from "react";

export default class UserCard extends Component {
  render() {
    return (
      <div>
        <div className="card">
          <img src={this.props.user.avatar_url} alt="" />

          <div className="card-info">
            <h3 className="name">{this.props.user.name}</h3>
            <p className="username">{this.props.user.login}</p>

            <p>
              Profile:
              <a href={this.props.user.html_url}>Roboblox</a>
            </p>
            <p>Followers: {this.props.user.followers}</p>
            <p>Following: {this.props.user.following}</p>
          </div>
        </div>
        <div>
          {this.props.followers.map((follower) => {
            return (
              <div className="card" key={follower.id}>
                <img src={follower.avatar_url} alt="" />
                <div className="card-info">
                  <h3 className="username">{follower.login}</h3>

                  <p>
                    Profile:
                    <a href={follower.html_url}>click me</a>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
