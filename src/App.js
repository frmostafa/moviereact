import React from 'react';
import {Route ,Switch , Redirect} from 'react-router-dom';
import Movie from './components/movie';
import Costumer from './components/customers'
import NotFound from './components/notfound';
import Rentals from './components/rentals';
import MovieForm from './components/movieForm';
import Login from './components/auth/login';
import NavBar from './components/navBar';
import Register from './components/auth/register';
import NewMovie from './components/newMovie';
import './App.css';



function App() {
  return (
    <React.Fragment>
    <NavBar />
    <main className="App container">
      {/* <Movie /> */}
      <Switch>
      <Route path="/costumer" component={Costumer}></Route>
      <Route path="/login" component={Login}></Route>
      <Route path="/register" component={Register}></Route>
      <Route path="/not-found" component={NotFound}></Route>
      <Route path="/rentals" component={Rentals}></Route>
      <Route path="/movieform" component={MovieForm}></Route>
      <Route path="/movies/new" component={NewMovie}></Route>
      <Route path="/movies/:id" component={NewMovie}></Route>
      <Route path="/movies" component={Movie}></Route>
      <Redirect from="/" exact to="/movies"></Redirect>

      <Redirect to="/not-found"></Redirect>
      </Switch>
    </main>
    </React.Fragment>
  );
}

export default App;
