import React, { createContext,useReducer } from "react";
import Signup from './Component/Signup';
import Login from './Component/Login';
import { BrowserRouter, Route,Switch} from "react-router-dom";
import Home from './Component/Home';
import Navbar from './Component/Navbar';
import Logout from './Component/Logout';
import { initialState,reducer } from "./Reducer/reducer";
  export const userContext=createContext();
  const Routing = () => {
    return (
      <Switch>
        <Route exact path="/">
          <Home />




 
  
        </Route>

        <Route path="/signup" component={Signup} />
        <Route path="/login">
          <Login />
        </Route>
        {/* <Route exact path="/landing">
          <LandingPage />
        </Route> */}
        
        <Route path="/logout">
          <Logout />
        </Route>
      </Switch>
    );
  }
function App() {
const [state, dispatch] = useReducer(reducer, initialState)
  
  return (
    <BrowserRouter>
      <>
        <userContext.Provider value={{ state, dispatch }}>
         <Navbar />
          <Routing />
          {/* <LandingPage/> */}
        </userContext.Provider>
      </>
    </BrowserRouter>
  );
}

export default App;
