import createDataContext from "./createDataContext";
import tracker from '../api/tracker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
    switch (action.type) {
        case 'signout':
            return { token: null, errorMessage: '' }
        case 'clear_error_message':
            return { ...state, errorMessage: '' }
        case 'signin':
            return { errorMessage: '', token: action.payload };
        case 'add_error':
            return { ...state, errorMessage: action.payload };
        default:
            return state;
    }
}

const signup = (dispatch) => async (email, password) => {
    try {
        const response = await tracker.post('/signup', { email, password });
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({ type: 'signin', payload: response.data.token });
        navigate('TrackList');

    } catch (err) {
        console.log(err);
        dispatch({ type: 'add_error', payload: 'Unable to sign up' })
    }
}

const signin = (dispatch) => async (email, password) => {
    try {
        const response = await tracker.post('/signin', { email, password });
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({ type: 'signin', payload: response.data.token });
        navigate('TrackList');
    } catch (err) {
        console.log(err);
        dispatch({ type: 'add_error', payload: 'Unable to sign in' })
    }
}

const clearErrorMessage = (dispatch) => () => {
    dispatch({ type: 'clear_error_message' })
}

const initialAuth = (dispatch) => async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
        dispatch({ type: 'signin', payload: token });
        navigate('TrackList');
    } else {
        navigate('Signup');
    }
}

const signout = (dispatch) => async () => {
    await AsyncStorage.removeItem('token');
    dispatch({ type: 'signout' });
    navigate('Signup');
}

export const { Context, Provider } = createDataContext(
    authReducer,
    { signup, signin, clearErrorMessage, initialAuth, signout },
    { token: null, errorMessage: '' }
)