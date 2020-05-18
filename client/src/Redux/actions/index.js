import * as actions from './actionTypes'
export const SetAuthState = (authState) => {
    return {
        type: actions.SET_AUTH_STATE,
        payload: { authState: authState }
    }
}
export const SetUser = (user) => {
    return {
        type: actions.SET_USER,
        payload: { user: user }
    }
}