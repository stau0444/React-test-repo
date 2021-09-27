const SHOW_ALL = "react-redux-test/filter/SHOW_ALL";
const SHOW_COMPLETED = "react-redux-test/filter/SHOW_COMPLETED";

export function showAll() {
    return{
        type:SHOW_ALL,
    }
}

export function showCompleted() {
    return{
        type:SHOW_COMPLETED,
    }
}

const initialState = 'ALL';

export default function reducer(prevState = initialState, action) {
    if(action.type === SHOW_ALL){
        return{filter: 'ALL'}
    }

    if(action.type === SHOW_COMPLETED){
        return{filter: 'COMPLETED'}
    }

    return prevState;
}
