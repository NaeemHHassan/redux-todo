// import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { getAll } from "./redux/Actions";
function App() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  // const auth = useSelector(({ auth }) => {
  //   return auth.auth;
  // });

  const categories = useSelector(({ auth }) => {
    return auth.categories;
  });

  useEffect(() => {
    !categories && dispatch(getAll());
  }, [categories, dispatch]);

  return (
    <div className="App">
      <header className="App-header">
        {categories && (
          <ol>
            {categories.map((item, index) => (
              <li
                key={item._id}
                onClick={() => {
                  dispatch({ type: "REMOVE", _id: item._id });
                }}
              >
                {item.name}
              </li>
            ))}
          </ol>
        )}
        <form onSubmit={(e) => e.preventDefault()}>
          <input value={text} onChange={(e) => setText(e.target.value)}></input>
          <button
            onClick={(e) => {
              if (text) {
                dispatch({ type: "AUTH", auth: text });
                setText("");
              }
            }}
          >
            Add To Redux
          </button>
        </form>
      </header>
    </div>
  );
}

export default App;
