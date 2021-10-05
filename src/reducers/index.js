import { combineReducers } from "redux";
import CoursesReducer from "./CoursesReducer";
import InstructorsReducer from "./InstructorsReducer";


const rootReducer = combineReducers({
    courses: CoursesReducer,
    instructors: InstructorsReducer
  });

export default rootReducer;