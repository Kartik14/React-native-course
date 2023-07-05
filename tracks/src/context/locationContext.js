import createDataContext from "./createDataContext";

const locationReducer = (state, action) => {
    switch (action.type) {
        case 'start_recording':
            return { ...state, recording: true };
        case 'stop_recording':
            return { ...state, recording: false };
        case 'add_name':
            return { ...state, trackName: action.payload };
        case 'add_location':
            return { ...state, locations: [...state.locations, action.payload] }
        case 'add_current_location':
            return { ...state, currentLocation: action.payload };
        case 'reset':
            return { ...state, locations: [], trackName: '' };
        default:
            return state;
    }
}

const startRecording = dispatch => () => {
    dispatch({ type: 'start_recording' });
};


const stopRecording = dispatch => () => {
    dispatch({ type: 'stop_recording' });
};

const addName = dispatch => (name) => {
    dispatch({ type: 'add_name', payload: name });
}

const addLocation = dispatch => (location, recording) => {
    dispatch({ type: 'add_current_location', payload: location });
    if (recording) {
        dispatch({ type: 'add_location', payload: location });
    }
};

const reset = dispatch => () => {
    dispatch({ type: 'reset' });
}

export const { Context, Provider } = createDataContext(
    locationReducer,
    { startRecording, stopRecording, addLocation, addName, reset },
    { trackName: '', recording: false, locations: [], currentLocation: null }
)