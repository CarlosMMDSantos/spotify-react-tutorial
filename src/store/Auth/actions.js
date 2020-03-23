export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'

export const login = data => ({
    type: LOGIN,
    data: data
})

export const logout = () => ({
    type: LOGOUT
})

export function handleLogin () {
    return async (dispatch, getState) => {
        let data = {}

        let response = await getState().authReducer.oauth.token.getToken(window.location.href)

        data.accessToken = response.accessToken
        data.tokenType = response.tokenType
        data.expiresAt = response.expires

        dispatch(login(data))
    }
}

export function handleLogout () {
    return dispatch => {
        dispatch(logout())
    }
}