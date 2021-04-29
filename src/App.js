import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
function App() {
  const [text, setText] = useState("");

  const auth = useSelector(({ auth }) => {
    return auth.auth;
  });
  const dispatch = useDispatch();
  // console.log(auth);
  return (
    <div className="App">
      <header className="App-header">
        {auth && (
          <ol>
            {auth.map((item, index) => (
              <li
                key={item}
                onClick={() => {
                  dispatch({ type: "REMOVE", item });
                }}
              >
                {item}
              </li>
            ))}
          </ol>
        )}
        <form onSubmit={(e) => e.preventDefault()}>
          <input value={text} onChange={(e) => setText(e.target.value)}></input>
          <button
            onClick={(e) => {
              dispatch({ type: "AUTH", auth: text });
              setText("");
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
