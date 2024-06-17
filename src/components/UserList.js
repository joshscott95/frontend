// src/components/UserList.js
import React, { Component } from 'react';
import axios from 'axios';

class UserList extends Component {
  state = {
    users: []
  };

  componentDidMount() {
    axios.get('http://localhost:8000/api/users/')
      .then(res => {
        this.setState({ users: res.data });
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    return (
      <div>
        <h1>User List</h1>
        <ul>
          {this.state.users.map(user => (
            <li key={user.id}>{user.username}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default UserList;
