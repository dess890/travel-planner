import { addLocation, ADD_LOCATION, ADD_LOCATIONS, DELETE_LOCATION } from "./actions"

const defaultState = {
    locations: []
}

export default function rootReducer(state = defaultState, action) {
    switch (action.type) {
        case ADD_LOCATION:
            return {
                locations: [...state.locations, action.location],
            }
        case ADD_LOCATIONS:
            return {
                locations: [...state.locations, ...action.locations]
            }
        default:
            return state
    }
}

