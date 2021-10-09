import FormData from "./Components/Form/Formdata";
import React, { createContext, useReducer } from "react";
import Signup from "./Component/Signup";
import Login from "./Component/Login";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Logout from "./Component/Logout";
import { initialState, reducer } from "./Reducer/reducer";
import { Header } from "./Components/Header/Header";
import { Cards } from "./Components/Cards/Cards";
import { Dashboard } from "./Components/Dashboard/Dasboard";
import Status from "./Components/Form/Status";

export const userContext = createContext();
const Routing = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Header />
        <Cards />
        <Dashboard/>
      </Route>

      <Route path="/signup" component={Signup} />
      <Route path="/login">
        <Login />
      </Route>
      <Route exact path="/landing">
        <FormData />
      </Route>

      <Route exact path="/landing">
        <FormData/>
      </Route>

      <Route exact path="/status">
        <Status/>
      </Route>


      <Route exact path="/dashboard">
        <Dashboard/>
      </Route>

      <Route path="/logout">
        <Logout />
      </Route>
    </Switch>
  );
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <BrowserRouter>
      <>
        <userContext.Provider value={{ state, dispatch }}>
          <Navbar />

          <Routing />
        </userContext.Provider>
      </>
    </BrowserRouter>
  );
}

export default App;
