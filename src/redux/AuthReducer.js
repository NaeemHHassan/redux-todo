const initialState = {
  auth: ["Hello", "THERE", "222"],
  categories: null,
};
// /filter , map , indexOf, findIndexOf 
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
      case "ADD":{
        console.log(action.text);
        let _categories =state.categories;
        _categories.push({_id:`{action.text ${action.text}} `,name:action.text});
      return {
        ...state,
        categories:_categories
      };
    }
    case "REMOVE": {
      console.log("Action", action._id);
      const _new = state.categories.filter((item) => item._id !== action._id);
      return {
        ...state,
        categories: _new.length>0?_new:null
      };
    }
    default:
      return state;
  }
}
