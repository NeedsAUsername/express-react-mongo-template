import React from 'react';
import './users.css';

class Users extends React.Component {
  state = {
    users: []
  }

  componentDidMount() {
    // localhost:5000 in proxy
    fetch('/api/users')
    .then(res => res.json())
    .then(users => this.setState({
      users: users
    }, ()=> console.log(this.state)))
  }

  renderUsers = () => (this.state.users.map(user => <li key={user.id}>{user.name}</li>)
  )

  render () {
    return (
      <div>
        <h1 className="title">Users Component</h1>
        <ul>
          Users: {this.renderUsers()}
        </ul>
      </div>
    )
  }
}

export default Users;
