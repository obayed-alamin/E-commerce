import logo from './logo.svg';
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomePage from './Pages/Home/HomePage/HomePage';
import NavBar from './Pages/Shared/NavBar/NavBar';
import AuthProvider from './Context/AuthProvider/AuthProvider'
import Login from './Pages/Login/Login/LogIn';
import AllProducts from './Pages/AllProducts/AllProducts';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Register from './Pages/Login/Register/Register';
import Purchase from './Pages/Purchase/Purchase';
import DashBoard from './Pages/DashBoard/DashBoard/DashBoard'



function App() {
  return (
    <div className="App">
       <AuthProvider>
       <Router>
       <NavBar></NavBar>
        <Switch>
          <Route exact path="/">
            <HomePage></HomePage>
          </Route>
          <Route path="/home">
            <HomePage></HomePage>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <PrivateRoute path="/explore">
            <AllProducts></AllProducts>
          </PrivateRoute>
          <PrivateRoute exact path="/purchase/:id">
            <Purchase></Purchase>
          </PrivateRoute>
          <PrivateRoute path='/dashboard'>
           <DashBoard></DashBoard>
          </PrivateRoute>
        </Switch>
      </Router>
       </AuthProvider>
    </div>
  );
}

export default App;
