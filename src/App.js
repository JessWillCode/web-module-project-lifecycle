import React from 'react';
import axios from 'axios';

import User from './components/User';

class App extends React.Component {
  state = {
    avatar: '',
    name: '',
    username:'',
    repos: '',
    followers: ''
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/jesswillcode')
      .then(res => {
        console.log(res.data);
        this.setState({
          ...this.state,
          avatar: res.data.avatar_url,
          name: res.data.name,
          username: res.data.login,
          repos: res.data.public_repos,
          followers: res.data.followers
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
      <User avatar={this.state.avatar} name={this.state.name} username={this.state.username} repos={this.state.repos} followers={this.state.followers}/>
      <div className='follower-list'>
        <h3>FOLLOWERS:</h3>
        <div className='follower'>
        <img width='150' src='https://avatars.githubusercontent.com/u/93016877?v=4' />
        <h6>Nicholalexander</h6>
        </div>
      </div>
    </div>
    );
  }
}

export default App;
