import {CreateStore} from 'redux'

const initalState = {
    count:3
}

const reducer = (state = initalState, action) => {
    console.log('reducer running', action)
    return state
}

const store = CreateStore(reducer);

export default store