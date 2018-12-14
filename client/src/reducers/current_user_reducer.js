function currentUserReducer(state = {
  authenticated: false,
  _id: "1234",
  name: "testing",
  email: "testing@testing.com",
  posts: [{title: "testPost", content: "testContent"}]
}, action) {
  console.log(action);

  return state;
}
export default currentUserReducer;
