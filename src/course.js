export const initialState = [
    {
      name: "Add a course item",
      done: false
    }
  ];
  
  const ADD = "ADD";
  const MARK = "MARK";
  const DELETE = "DELETE";
  
  export function courseReducer(state, action) {
    switch (action.type) {
      case ADD:
        return [...state, action.payload.course];
      case MARK:
        return state.map((course, i) => {
          return {...course, done: i === action.payload.courseId ? action.payload.done : course.done};
        });
      case DELETE:
        return state.filter((course, i) => action.payload.courseId !== i);
      default:
        return state;
    }
  }
  
  export function addAction(courseText) {
    return {
      type: ADD,
      payload: {
        course: {
          name: courseText,
          done: false
        }
      }
    };
  }
  
  export function markAction(courseId, done) {
    return {
      type: MARK,
      payload: {
        courseId,
        done
      }
    };
  }
  
  export function deleteAction(courseId) {
    return {
      type: DELETE,
      payload: {
        courseId
      }
    };
  }
  