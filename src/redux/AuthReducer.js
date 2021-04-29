const initialState = {
  auth: ["Hello", "THERE", "222"],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "AUTH":
      return {
        ...state,
        auth: [...state.auth, action.auth],
      };
    case "REMOVE": {
      console.log(action.item);
      return {
        ...state,
        auth: state.auth.filter((item) => item !== action.item),
      };
    }
    default:
      return state;
  }
}
