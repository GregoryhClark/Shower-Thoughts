import axios from 'axios';

const initialState = {
    showerThoughts:[],
    styleingTheme:''
}

//actionTypes
const GET_THOUGHTS = 'GET_THOUGHTS';
const CHANGE_THEME = 'CHANGE_THEME';

export default function reducer(state = initialState, action) {
    switch (action.type){
        //cases
        case GET_THOUGHTS + '_FULFILLED':
            return   Object.assign({}, state, {showerThoughts: action.payload});
        case CHANGE_THEME + '_FULFILLED':
            return Object.assign({}, state, {styleingTheme: action.payload});

        default: return state;
    }
}

//action creators
export function getThoughts(){
    let showerThoughts = axios.get('/api/thoughts')
        .then(res => {
            return res.data;
        })
        return {
            type: GET_THOUGHTS,
            payload: showerThoughts
        };
}
export function setTheme(theme){
    return {
        type: CHANGE_THEME,
        payload: theme
    }
}