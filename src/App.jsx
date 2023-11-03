import logo from "./logo.svg";
import "./App.css";
// import { getCarsThunk } from "./redux/cars/operations";
// import { useDispatch } from "react-redux";
// import { useEffect } from "react";

export const  App=()=> {
  // const dispatch = useDispatch();


  // useEffect(() => {
  //   dispatch(getCarsThunk())
  // },[dispatch]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
