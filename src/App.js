import React from 'react';
import axios from 'axios';

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
      <form>
        <input />
        <button>Search</button>
      </form>
      </div>
      <div className='User'>
        <div className='avatar'>
          <img width='300' src={this.state.avatar} />
        </div>
        <h3>{this.state.name}</h3>
        <h6>({this.state.username})</h6>
        <h4>Repos: {this.state.repos}</h4>
        <h4>Followers: {this.state.followers}</h4>
      </div>
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
