export function login(formState) {
  return (dispatch) => {
    dispatch({type: 'LOADING_LOG_IN'})
    fetch('/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      accepts: 'application/json',
      body: JSON.stringify({user: formState})
    }).then(response => response.json())
      .then(user => {
        alert(JSON.stringify(user));
        dispatch({
          type: 'LOG_IN',
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
