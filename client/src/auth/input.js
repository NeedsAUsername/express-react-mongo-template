import React from 'react';

class authInput extends React.Component {
  render () {
    return (
      <React.Fragment>
        <h1>{this.props.title}</h1>
        <form onSubmit={this.props.formAction}>
          <label htmlFor="email">Email</label>
          <input id="email" type="email"/>
          <input type="submit" />
        </form>
      </React.Fragment>
    )
  }
}

export default authInput;
