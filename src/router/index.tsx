import React from 'react';
import { Router } from '@reach/router';
import HomeScreen from '../pages/Home';

let Profile = () => <div>Profile</div>

const MainRouter = () => {
  return (
    <Router>
      <HomeScreen path="/" />
      <Profile path="profile" />
    </Router>
  )
}

export default MainRouter;
