import {ADD_COURSE, DELETE_COURSE, EDIT_COURSE,SET_COURSES} from "../constants/coursesTypes"

const initialState = [

];


    const CourseReducer =  (state = initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        case SET_COURSES:
            return [...payload];
        default:
            return state;
    }
}


export default CourseReducer;