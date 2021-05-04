import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import BookInfo from './pages/BookInfo'
import Error from './pages/Error'


function App() {
  return (
    <Router>
      <Header />


      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/book/:id">
          <BookInfo />
        </Route>

        <Route path="/error">
          <Error />
        </Route>

      </Switch>

    </Router>

  );
}

export default App;
