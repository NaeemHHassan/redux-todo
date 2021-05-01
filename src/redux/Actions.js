import axios from "axios";

export const getAll = () => (dispatch) => {
  axios
    .get("https://warm-sea-30788.herokuapp.com/api/product")
    .then((result) => {
      alert("Server call")
      dispatch({ type: "CATEGORIES", categories: result.data });
    })
    .catch((err) => {
      console.log(err);
    });
};
