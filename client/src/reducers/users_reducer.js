function usersReducer(state = [
  {name: "test", email: "test@test.com"},
  {name: "test2", email: "test2@test.com"}
], action) {
  console.log(action);

  return state;
}
export default usersReducer;
