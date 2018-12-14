function usersReducer(state = {
  loading: false,
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
  }
  return state;
}
export default usersReducer;
