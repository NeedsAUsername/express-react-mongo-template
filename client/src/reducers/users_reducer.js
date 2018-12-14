function usersReducer(state = [
  {_id: "1111", name: "test", email: "test@test.com"},
  {_id: "2222", name: "test2", email: "test2@test.com"}
], action) {
  console.log(action);

  return state;
}
export default usersReducer;
