function currentUserReducer(state = {
  authenticated: false,
  _id: "1234",
  name: "testing",
  email: "testing@testing.com",
  posts: [{title: "testPost", content: "testContent"}],
  logging_in: false
}, action) {
  console.log(action);
  if (action.error || (action.payload && action.payload.error)) {
    return {
      authenticated: false,
      _id: "",
      name: "",
      email: "",
      posts: []
    };
  }

  switch(action.type) {
    case 'LOADING_LOG_IN':
      return {...state, loggingIn: true}

    case 'LOG_IN':
      let {_id, email, token} = action.payload;
      localStorage.setItem('token', token);
      if (localStorage.getItem('token') !== token) {
        alert('Error in setting auth token');
        return {...state, loggingIn: false}
      }
      return {...state, loggingIn: false, authenticated: true,
        email: email, _id: _id}

    default:
      return state;
  }
}
export default currentUserReducer;
