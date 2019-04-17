import {
	USER_LOADED,
	USER_LOADING,
	AUTH_ERROR,
	LOGIN_SUCCESS,
	LOGIN_FAIl,
	LOGOUT_SUCCESS,
	REGISTER_SUCCESS,
	REGISTER_FAIL
} from '../actions/types'
import { Action } from 'rxjs/internal/scheduler/Action';


const initialState = {
	token: localStorage.getItem('token'),
	isAuthenticated: null,
	isLoading: false,
	user: null
}

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case USER_LOADING:
			return {
				...state,
				isLoading: true
			}

		case USER_LOADED:
			return {
				...state,
				isAuthenticated: true,
				isLoading: false,
				user: payload
			}

		case LOGIN_SUCCESS:
		case REGISTER_SUCCESS:
			return {
				...state,
				...payload,
				isAuthenticated: true,
				isLoading: false,
			}

		case AUTH_ERROR:
		case LOGIN_FAIl:
		case LOGIN_SUCCESS:
		case REGISTER_FAIL:
			localStorage.removeItem('token')
			return {
				...state,
				token: null,
				user: null,
				isAuthenticated: false,
				isLoading: false
			}

		default:
			return state
	}
}