function usersReducer(state = {
  loading: false,
  signingUp: false,
  usersList: []
}, action) {
  console.log(action);
  if (action.error) {
    alert(action.error);
    return state;
  }

  switch(action.type) {
    case 'LOADING_USERS':
      return {...state, loading: true}

    case 'LOAD_USERS':
      return {...state, loading: false, usersList: action.payload}

    case 'LOADING_SIGN_UP':
      return {...state, signingUp: true}

    case 'SIGN_UP':
      return {...state, signingUp: false, usersList: [...state.usersList, action.payload]}

    default:
      return state;
  }
}
export default usersReducer;
