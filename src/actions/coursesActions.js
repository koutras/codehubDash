import {ADD_COURSE, DELETE_COURSE, EDIT_COURSE,SET_INSTRUCTORS, SET_COURSES} from "../constants/coursesTypes"

export const setInstructors = (instructors) => ({
    type: SET_INSTRUCTORS,
    payload: instructors,
})

export const setCourses = (courses) => ({
    type: SET_COURSES,
    payload: courses,
})


export const addCourse = (course) => ({
    type: ADD_COURSE,
    payload: course,
})


