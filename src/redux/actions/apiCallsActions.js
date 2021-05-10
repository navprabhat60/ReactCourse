export function beginApiCall() {
  return {
    type: "BEGIN_API_CALLS",
  };
}

export function apiCallError() {
  return {
    type: "API_CALL_ERROR",
  };
}
