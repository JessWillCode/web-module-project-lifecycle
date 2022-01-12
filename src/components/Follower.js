/* eslint-disable react/prop-types */
import React from "react";


class Follower extends React.Component {
    render() {
      return(
        <div className='follower'>
          <img width='150' src={this.props.followers.avatar_url} />
          <h6>{this.props.followers.login}</h6>
          </div>
      )
    }
  }

  export default Follower;