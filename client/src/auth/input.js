import React from 'react';

class authInput extends React.Component {
  render () {
    let props = this.props;
    return (
      <form>
        <label htmlFor="email">Email</label>
        <input id="email" type="email"/>
        <input type="submit" />
      </form>
    )
  }
}

export default authInput;
