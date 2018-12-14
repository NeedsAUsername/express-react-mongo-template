export function fetchUsers() {
  return (dispatch) => {
    dispatch({type: "LOADING_USERS"});
    fetch('/api/users')
    .then(res => res.json())
    .then(users => {
      dispatch({
        type: 'LOAD_USERS',
        payload: users
      })
    })
    .catch(err => {
      dispatch({
        type: 'ERROR',
        payload: {error: err}
      })
    })
  }
}
