import initialState from "./initialState";

function actionTypeEndsInSuccess(type) {
  return type.substring(type.length - 8) === "_SUCCESS";
}

export default function apiCallsReducer(
  state = initialState.apiCallsInProgress,
  action
) {
  debugger;
  if (action.type == "BEGIN_API_CALLS") {
    return state + 1;
  } else if (
    action.type === "API_CALL_ERROR" ||
    actionTypeEndsInSuccess(action.type)
  ) {
    return state - 1;
  }

  return state;
}
