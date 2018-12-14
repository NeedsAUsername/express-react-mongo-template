function usersReducer(state = {
  loading: false,
  usersList: []
}, action) {
  console.log(action);
  if (action.payload && action.payload.error) {
    alert(action.payload.error);
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
