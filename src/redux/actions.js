export const ADD_LOCATION = 'ADD_LOCATION';
export const DELETE_LOCATION = 'DELETE_LOCATION';
export const ADD_LOCATIONS = 'ADD_LOCATIONS'

export const addLocation = (location) => {
    return {
        type: ADD_LOCATION,
        location,
    };
}

export const deleteLocation = (id) => {
    return {
        type: DELETE_LOCATION,
        id,
    };
}

export const addLocations = (locations) => {
    return {
        type: ADD_LOCATIONS,
        locations,
    }
}