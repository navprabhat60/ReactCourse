import initialState from "./initialState";

export default function courseReducer(state = initialState.courses, action) {
  switch (action.type) {
    case "LOAD_COURSE_SUCCESS":
      return action.courses;
    case "UPDATE_COURSE_SUCCESS":
      return state.map((course) =>
        course.id === action.course.id ? action.course : course
      );
    case "SAVE_COURSE_SUCCESS":
      return [...state, { ...action.course }];
    default:
      return state;
  }
}
