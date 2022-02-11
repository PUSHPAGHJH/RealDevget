import React, {useReducer, createContext} from 'react'
import { Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ErrorPage from "./components/Errorpage";
import Logout from "./components/Logout";
import Updateprofile from './components/Updateprofile';
import ProjectSection from './components/ProjectSection';
// import Popular from './components/Popular';



import { initialState, reducer } from "./reducer/UseReducer";

// import 'bootstrap/dist/js/bootstrap.bundle.min'

// we create a contextAPI 
export const UserContext = createContext();

  

const Routing = () => {
  
  return (
    <>
       <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/about">
        <About />
      </Route>

      <Route path="/projectsection">
        <ProjectSection/>
      </Route>

      <Route path="/contact">
        <Contact />
      </Route>

      <Route path="/login">
        <Login />
      </Route>

      <Route path="/signup">
        <Signup />
      </Route>
        
      <Route path="/logout">
        <Logout />
      </Route>

      <Route path="/updateprofile">
      <Updateprofile/>
    </Route>
      
      <Route>
        <ErrorPage />
      </Route>

    

    </Switch>
    </>
  )
}

const App = () => {

  //* we use useReducer
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
   
      <UserContext.Provider value={{state, dispatch}}>
        
        <Navbar />
        <Routing />
       

      </UserContext.Provider>
  )
}

export default App

