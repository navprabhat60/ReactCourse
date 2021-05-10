import * as authorApi from "../../api/authorApi";
import { beginApiCall, apiCallError } from "../actions/apiCallsActions";

export function loadAuthorSuccess(authors) {
  return {
    type: "LOAD_AUTHORS_SUCCESS",
    authors,
  };
}

export function loadAuthor() {
  return function (dispatch) {
    dispatch(beginApiCall());
    return authorApi
      .getAuthors()
      .then((authors) => {
        dispatch(loadAuthorSuccess(authors));
      })
      .catch((errors) => {
        dispatch(apiCallError());
        throw errors;
      });
  };
}
