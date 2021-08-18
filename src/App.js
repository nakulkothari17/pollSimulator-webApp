import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainView from './view/MainView';
import BecomeCandidate from './view/BecomeCandidate';
import CastVote from './view/CastVote';
import ElectionResult from './view/ElectionResult';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <MainView />
          </Route>
          <Route exact path="/become-candidate">
            <BecomeCandidate />
          </Route>
          <Route exact path="/cast-vote">
            <CastVote />
          </Route>
          <Route exact path="/election-result">
            <ElectionResult />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
