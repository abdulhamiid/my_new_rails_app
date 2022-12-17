import React from "react"
import ReactDOM from "react-dom"
import { NavLink } from "react-router-dom";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from "react-redux";
import store from "./components/redux/store";
import Greeting from "./components/Greeting";

const App = () => {
  return (
    <Routes>
      <Route exact path="/greet" element={<Greeting />} />
    </Routes>
  )
}

ReactDOM.render(
       <Provider store={store}>
         <BrowserRouter>
           <NavLink to="/" role="button">
              <span>Home | </span>
           </NavLink>
           <NavLink to="/greet" role="button">
              <span>Greet someone</span>
            </NavLink>
           <App />
         </BrowserRouter>
       </Provider>, document.getElementById('root'))