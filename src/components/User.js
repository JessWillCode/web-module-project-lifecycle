/* eslint-disable react/prop-types */
import React from "react";

class User extends React.Component {
    render() {
      return(
        <div className='User'>
          <div className='avatar'>
            <img width='300' src={this.props.avatar} />
          </div>
          <h3>{this.props.name}</h3>
          <h6>({this.props.username})</h6>
          <h4>Repos: {this.props.repos}</h4>
          <h4>Followers: {this.props.followers}</h4>
        </div>
      )
    }
  
  }

  export default User;