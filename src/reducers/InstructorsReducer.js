import { SET_INSTRUCTORS } from "../constants/coursesTypes"

const initialState = []


const InstructorsReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case SET_INSTRUCTORS:
            return [...payload];
        default:
            return state;
    }
}

export default InstructorsReducer;