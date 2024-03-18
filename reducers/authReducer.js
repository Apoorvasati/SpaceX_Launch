// reducers/authReducer.js
const initialState = {
  users: [],
  currentUser: null
}
function updateSessionStore(data) {
  sessionStorage.setItem("users_date", JSON.stringify(data));
}
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SIGN_UP':
      updateSessionStore({
        ...state,
        users: [...state.users, action.payload]
      });
      return {
        ...state,
        users: [...state.users, action.payload]
      }
    case 'LOGIN':
      const { username, password } = action.payload;
      const user = state.users.find(user => user.username === username && user.password === password);
      updateSessionStore({
        ...state,
        currentUser: user ? user : null
      });
      return {
        ...state,
        currentUser: user ? user : null
      }
    case 'LOGOUT':
      updateSessionStore({
        ...state,
        currentUser: user ? user : null
      });
      return {
        ...state,
        currentUser: null,
        // isLoggedIn: false,
      };
    case 'UPDATE_REGISTRATIONS_ON_REFRESH':
      return action.payload;
    default:
      return state;
  }
}

export default authReducer;