import { csrfFetch } from "./csrf";


const GET_USER = 'session/GET_USER';
const REMOVE_USER = 'session/REMOVE_USER';

//action creator
export const getUser = (user) => {
    return {
        type: GET_USER,
        user
    }
}

export const removeUser = () => {
    return {
        type: REMOVE_USER,
    }
}

//thunk actions
export const login = (user) => async dispacth => {
    const response = await csrfFetch(`/api/session`, {
        method: 'post',
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({credential:user.credential, password:user.password})
    })

    const currentUser = await response.json();
    if(response.ok){
        dispacth(getUser(currentUser.user));
    }
    return currentUser;
}

export const restoreUser =() => async dispacth => {
    const req = await csrfFetch(`api/session`)
    const user = await req.json();
    if(user.user?.id){
        dispacth(getUser(user.user))
    }
    return req;
}

//signup thunk action
export const signup = (form) => async dispacth => {
    const {username, email, password} = form;

    const req = await csrfFetch(`/api/users`, {
        method: 'post',
        header: {'Content-Type': 'application/json'},
        body: JSON.stringify({username, email, password})
    })
    const newUser = await req.json();
    if(req.ok){
        dispacth(getUser(newUser))
    }
    return newUser;
}

//logout thunk action
export const logout = () => async dispacth => {
    const req = await csrfFetch(`/api/session`, {
        method: 'delete',
    })
    if(req.ok)
    {
        dispacth(removeUser());
    }
    return req;
}

//initial POJO
const initialState = { user:null }

//session Reducer.
const sessionReducer = (state=initialState, action) => {
    switch(action.type){
        case GET_USER:
            return {...state, user: {...action.user}}
        case REMOVE_USER:
            return {...state, user: null }
        default:
            return state;
    }
}

export default sessionReducer;
