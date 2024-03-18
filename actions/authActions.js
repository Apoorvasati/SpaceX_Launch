
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
  
  export const logout = () => ({
    type: 'LOGOUT',
  });

  export const updateRegistrationsOnRefresh = (latestRegistrations) => {
    return {
      type: 'UPDATE_REGISTRATIONS_ON_REFRESH',
      payload: latestRegistrations
    }
  }
