import axios from 'axios';
//actiontype
const GET_USER = 'GET/USER';
//actionreducer
const getUser = (data) => {
    return {
        type: GET_USER,
        data
    }
}
//reducer
export const getUserData = server => {
    return (dispatch, getState) => {
        return axios.get("api/userinfo").then(res => {
            const user = res.data;
            dispatch(getUser(user));
        })
    }
}
//store
const defaultState = {
    name: '',
    age: ''
}

export default (state = defaultState, action) => {
    switch (action.type) {

        case GET_USER:
            const newstore = {
                ...state,
                ...action.data
            }
            return newstore;
        default:
            return state;
    }
}
