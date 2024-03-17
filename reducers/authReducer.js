// reducers/authReducer.js
const initialState = {
    users: [],
    currentUser: null
  }
  
  const authReducer = (state = initialState, action) => {
    switch(action.type) {
      case 'SIGN_UP':
        return {
          ...state,
          users: [...state.users, action.payload]
        }
      case 'LOGIN':
        const { username, password } = action.payload;
        const user = state.users.find(user => user.username === username && user.password === password);
        console.log(user);
        return {
          ...state,
          currentUser: user ? user : null
        }
      default:
        return state;
    }
  }
  
  export default authReducer;