import React from 'react';
import HomeScreen from './Home';
import ProfileScreen from './Profile';
import { Router } from '@reach/router';

function App() {
  return (
    <div className="App">
      <Router>
        <HomeScreen path="/" default />
        <ProfileScreen path="profile" />
      </Router>
    </div>
  );
}

export default App;
