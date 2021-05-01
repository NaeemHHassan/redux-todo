// import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { getAll } from "./redux/Actions";
function App() {
  const [text, setText] = useState("");
  
  const dispatch = useDispatch();


  const categories = useSelector(({ auth }) => {
    return auth.categories;
  });

  useEffect(() => {
    !categories? dispatch(getAll()): console.log();;
  }, [categories, dispatch]);

  return (
    <div className="">
      <header className=" ">
        {categories && (
          <div className ="table">
            <thead>
              <th>_id</th>
              <th>name</th>
            </thead>
            {/* {hello} */}
            <tbody>
          {categories.map(item=> <tr>
            <td>{item._id}</td>
            <td>{item.name}</td>
            <button type="button" class="btn btn-primary" onClick={()=>{
              dispatch({type:"REMOVE" , _id:item._id})
            }}>Remove</button>

          </tr>)}
            </tbody>
          </div>
          // <ol>
          //   {categories.map((item, index) => (
          //     <li
          //       key={item._id}
          //       onClick={() => {
          //         dispatch({ type: "REMOVE", _id: item._id });
          //       }}
          //     >
          //       {item.name}
          //     </li>
          //   ))}
          // </ol>
        )}
        <form onSubmit={(e) => e.preventDefault()}>
          <input value={text} onChange={(e) => setText(e.target.value)}></input>
          <button
            onClick={(e) => {
              if (text) {
                dispatch({ type: "ADD", text: text });
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
