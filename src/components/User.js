/* eslint-disable react/prop-types */
import React from "react";

class User extends React.Component {
    render() {
      return(
        <div className='User'>
          <div className='avatar'>
            <img width='300' src={this.props.avatar_url} />
          </div>
          <a target='_blank' href={this.props.html_url} rel="noreferrer"><h6>{this.props.name}</h6></a>
          <h6>({this.props.login})</h6>
          <h4>Repos: {this.props.public_repos}</h4>
          <h4>Followers: {this.props.followers}</h4>
        </div>
      )
    }
  }

  export default User;