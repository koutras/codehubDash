import {ADD_COURSE, DELETE_COURSE, EDIT_COURSE,GET_COURSE, SET_COURSES} from "../constants/coursesTypes"

export const getCourse = (id) => ({
    type: GET_COURSE,
    payload: id,
})

export const setCourses = (courses) => ({
    type: SET_COURSES,
    payload: courses,
})

