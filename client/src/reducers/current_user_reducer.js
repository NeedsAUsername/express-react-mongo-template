function currentUserReducer(state = {
  authenticated: false,
  _id: "",
  name: "",
  email: "",
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
      let {_id, email, token, name} = action.payload;
      localStorage.setItem('token', token);
      if (localStorage.getItem('token') !== token) {
        alert('Error in setting auth token');
        return {...state, loggingIn: false}
      }
      return {...state, loggingIn: false, authenticated: true,
        email: email, _id: _id, name: name}

    case 'LOADING_CURRENT_USER':
      return {...state, loggingIn: true}

    case 'LOAD_CURRENT_USER':
      let user = action.payload
      return {...state, loggingIn: false, authenticated: true,
        email: user.email, _id: user._id, name: user.name}
    default:
      return state;
  }
}
export default currentUserReducer;
