import React from 'react';

class authInput extends React.Component {
  state = {
    email: ""
  }
  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render () {
    return (
      <React.Fragment>
        <h1>{this.props.title}</h1>
        <form onSubmit={e => this.props.formAction(e, this.state)}>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" value={this.state.email} onChange={this.handleChange}/>
          <input type="submit" />
        </form>
      </React.Fragment>
    )
  }
}

export default authInput;
