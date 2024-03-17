
export const signUp = (userInfo) => {
    return {
      type: 'SIGN_UP',
      payload: userInfo
    }
  }
  
  export const login = (credentials) => {
    return {
      type: 'LOGIN',
      payload: credentials
    }
  }
