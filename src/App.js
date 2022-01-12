import React from 'react';
import axios from 'axios';

import User from './components/User';
import FollowerList from './components/FollowerList';



class App extends React.Component {
  state = {
    currentUser: 'jesswillcode',
    user: {},
    followers: []
  }

  componentDidMount() {
    axios.get(`https://api.github.com/users/${this.state.currentUser}`)
      .then(res => {
        console.log(res.data);
        this.setState({
          ...this.state,
          user: res.data
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.state.user !== prevState.user){
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
}

handleChange = (e) => {
  this.setState({
    ...this.setState,
    currentUser: e.target.value
  })
}

handleSubmit = (e) => {
  e.preventDefault();
  axios.get(`https://api.github.com/users/${this.state.currentUser}`)
  .then(res => {
    this.setState({
      ...this.state,
      user: res.data
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
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} placeholder='Github Handle'/>
          <button>Search</button>
        </form>
        </div>
      </div>
      <User user={this.state.user}/>
      <div className='follower-list'>
        <h3>FOLLOWERS:</h3>
        <FollowerList followers={this.state.followers}/>
      </div>
    </div>
    );
  }
}

export default App;
