// import { ERROR, LOGIN, LOGOUT, UPDATE } from '../type'

import reduxToolkit from "../../core/reduxToolkit"
import Auth from '../../service/auth'

let initState = {
  login: JSON.parse(localStorage.getItem('login')),
  loginError: '',
  registerError: '',
  registerSuc: ''
}
let { action, reducer, TYPE } = reduxToolkit({
  initialStore: initState,
  name: 'auth',
  reducers: {
    login: (state, action) => {
      localStorage.setItem('token', JSON.stringify(action.payload.token))
      localStorage.setItem('login', JSON.stringify(action.payload))
      return {
        ...state,
        login: action.payload
      }
    },
    logout: (state, action) => {
      localStorage.setItem('login', false)
      localStorage.setItem('token', false)
      return {
        ...state,
        login: false
      }
    },
    registerErr: (state, action) =>{
      // console.log(state,action)
      return {
        ...state,
        registerError: action.payload,
        registerSuc: false
      }
    },
    registerSuc: (state, action) =>{
      // console.log(state,action)
      return {
        ...state,
        registerError: false,
        registerSuc: action.payload
      }
    },
    loginError: (state, action) => {
      return {
        ...state,
        loginError: action.payload
      }
    },
    update: (state, action) => {
      localStorage.setItem('login', JSON.stringify(action.payload))
      return {
        ...state,
        login: action.payload
      }
    }
  }
})
export default reducer

export const { error, update, logout, registerErr, registerSuc } = action
export const AUTH_TYPE = TYPE

// export function loginAction(data, success) {
export function loginAction(data) {
  return async (dispatch) => {
    let res = await Auth.login(data)
    if (res.data) {
      dispatch({
        type: AUTH_TYPE.login,
        payload: res.data
      })
      // success()
    } else if (res.error) {
      dispatch({
        type: AUTH_TYPE.error,
        payload: res.error
      })
    }
  }
}
export function registerAction(data) {
  // console.log('dasda')
  return async (dispatch) => {
    let res = await Auth.register(data)
    if (res.data) {
      dispatch({
        type: AUTH_TYPE.registerSuc,
        payload: "Đã đăng ký thành công!"
      })
      // success()
    } else if (res.error) {
      // console.log(res, res.error)
      dispatch({
        type: AUTH_TYPE.registerErr,
        payload: res.error
      })
    }
  }
}

export function updateAction(data) {
  return async (dispatch) => {
    let res = await Auth.update(data)
    if (res.data) {
      dispatch({
        type: AUTH_TYPE.update,
        payload: res.data
      })
    } else if (res.error) {
      dispatch({
        type: AUTH_TYPE.error,
        payload: res.error
      })
    }
  }
}

// export default function authReducer(state = initState, action) {
//   // console.log(action)
//   switch (action.type) {
//     case LOGIN:
//       localStorage.setItem('token', JSON.stringify(action.payload.token))
//       localStorage.setItem('login', JSON.stringify(action.payload))
//       return {
//         ...state,
//         login: action.payload
//       }
//     case LOGOUT:
//       localStorage.setItem('login', false)
//       return {
//         ...state,
//         login: false
//       }
//     case ERROR:
//       return {
//         ...state,
//         loginError: action.payload
//       }
//     case UPDATE:
//       localStorage.setItem('login', JSON.stringify(action.payload))
//       return {
//         ...state,
//         login: action.payload
//       }
//     default:
//       return state;
//   }
// }