function currentUserReducer(state = {
  authenticated: false,
  name: "testing",
  email: "testing@testing.com",
  posts: [{title: "testPost", content: "testContent"}]
}], action) {
  console.log(action);

  return state;
}
export default usersReducer;
