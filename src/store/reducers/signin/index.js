export function SignInReducer(state = {},action) {
  switch (action.type) {
    case "INITIAL":
      return {}
    default:
      return state;
  }
};