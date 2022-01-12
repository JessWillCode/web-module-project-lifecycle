import React from 'react';
import axios from 'axios';

import User from './components/User';
import FollowerList from './components/FollowerList';



class App extends React.Component {
  state = {
    avatar: '',
    name: '',
    username:'',
    repos: '',
    followerCount: '',
    followers: []
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/jesswillcode')
      .then(res => {
        this.setState({
          ...this.state,
          avatar: res.data.avatar_url,
          name: res.data.name,
          username: res.data.login,
          repos: res.data.public_repos,
          followerCount: res.data.followers
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    return(
    <div className='app'>
      <div className='header'>
        <h1>GITHUB INFO</h1>
        <div className='searchbar'>
        <form>
          <input />
          <button>Search</button>
        </form>
        </div>
      </div>
      <User avatar={this.state.avatar} name={this.state.name} username={this.state.username} repos={this.state.repos} followers={this.state.followerCount}/>
      <div className='follower-list'>
        <h3>FOLLOWERS:</h3>
        <FollowerList followers={this.state.followers}/>
      </div>
    </div>
    );
  }
}

export default App;
