import { combineReducers } from "redux";
import CoursesReducer from "./CoursesReducer";

const rootReducer = combineReducers({
    courses: CoursesReducer,
  });

export default rootReducer;