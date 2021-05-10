import * as courseApi from "../../api/courseApi";
import { beginApiCall, apiCallError } from "../actions/apiCallsActions";

function loadCoursesSuccess(courses) {
  return {
    type: "LOAD_COURSE_SUCCESS",
    courses,
  };
}

function updateCourseSuccess(course) {
  return {
    type: "UPDATE_COURSE_SUCCESS",
    course,
  };
}

function saveCourseSucess(course) {
  return {
    type: "SAVE_COURSE_SUCCESS",
    course,
  };
}

export function loadCourses() {
  return function (dispatch) {
    dispatch(beginApiCall());
    return courseApi
      .getCourses()
      .then((courses) => {
        dispatch(loadCoursesSuccess(courses));
      })
      .catch((error) => {
        dispatch(apiCallError());
        throw error;
      });
  };
}

export function saveCourse(course) {
  return function (dispatch) {
    dispatch(beginApiCall());
    return courseApi
      .saveCourse(course)
      .then((savedCourse) => {
        course.id
          ? dispatch(updateCourseSuccess(savedCourse))
          : dispatch(saveCourseSucess(savedCourse));
      })
      .catch((error) => {
        dispatch(apiCallError());
        throw error;
      });
  };
}
