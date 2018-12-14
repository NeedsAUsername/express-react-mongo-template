export function fetchCurrentUser() {
  return (dispatch) => {
    dispatch({type: 'LOADING_CURRENT_USER'})
    fetch('/api/users/current', {
      headers: {"Authorization": "Token " + localStorage.getItem("token")}
    })
    .then(response => response.json())
    .then(user => {
      dispatch({
        type: 'LOAD_CURRENT_USER',
        payload: user
      })
    })
    .catch(err => {
      dispatch({
        type: 'ERROR',
        error: err
      })
    })
  }
}
