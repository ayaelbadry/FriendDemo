import { combineReducers} from 'redux'

const initialState = {
    current: [
        'huda'
    ],
    possible: [
        'Aya',
        'sama',
        'nada',
        'rahf'
    ]
}

const friendsReducers = (state = initialState, action) => {
    switch (action.type){
        case 'ADD_FRIEND': 
        const {current, possible} = state
        const AddedFriend = possible.splice(action.payload, 1)
        current.push(AddedFriend)
        const newState = {current, possible}
        return newState
        default: 
        return state
    }
}

export default combineReducers({
    friends: friendsReducers
})