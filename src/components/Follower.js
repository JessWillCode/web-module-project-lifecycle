/* eslint-disable react/prop-types */
import React from "react";

class Follower extends React.Component {
    render() {
      return(
        <div className='follower'>
          <img width='150' src={this.props.avatar_url} />
          <a target='_blank' href={this.props.html_url} rel="noreferrer"><h6>{this.props.login}</h6></a>
          </div>
      )
    }
  }

  export default Follower;