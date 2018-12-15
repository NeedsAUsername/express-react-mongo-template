export function logout() {
  localStorage.removeItem('token');
  return {
    type: 'LOG_OUT',
  }
}
