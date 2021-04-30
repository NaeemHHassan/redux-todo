const initialState = {
  auth: ["Hello", "THERE", "222"],
  categories: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "CATEGORIES": {
      return { ...state, categories: action.categories };
    }
    case "AUTH":
      return {
        ...state,
        auth: [...state.auth, action.auth],
      };
    case "REMOVE": {
      const _new = state.categories.filter((item) => item._id !== action._id);
      return {
        ...state,
        categories: _new.length > 0 ? _new : null,
      };
    }
    default:
      return state;
  }
}
