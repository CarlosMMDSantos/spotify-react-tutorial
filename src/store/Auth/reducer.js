import { LOGIN, LOGOUT } from './actions'
import ClientOAuth2 from 'client-oauth2'
import appCredentials from './../../configs/AuthConfig'

const initialState = {
    oauth: new ClientOAuth2(appCredentials),
    accessToken: null,
    tokenType: null,
    expiresAt: null
}

export default function authReducer(state = initialState, action) {
    switch(action.type) {
        case LOGIN:
            return {
                ...state,
                accessToken: action.data.accessToken,
                tokenType: action.data.tokenType,
                expiresAt: action.data.expiresAt
            }
        case LOGOUT:
            return initialState
        default:
            return state
    }
}