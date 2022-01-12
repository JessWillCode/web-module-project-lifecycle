/* eslint-disable react/prop-types */
import React from "react";
import axios from "axios";

import Follower from "./Follower";

class FollowerList extends React.Component {

    componentDidMount() {
        axios.get('https://api.github.com/users/jesswillcode/followers')
            .then(res => {
                console.log(res.data);
                this.setState({
                    ...this.state,
                    followers: res.data
                })
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        return(
            <div className='follower'>
                {
                    this.state.followers.map(follower => {
                        return <Follower key={follower.id} followerAvatar={this.state.followers.avatar_url} followerName={this.state.followers.login}/>
                    })
                }
            </div>
        )
    }
}

export default FollowerList;