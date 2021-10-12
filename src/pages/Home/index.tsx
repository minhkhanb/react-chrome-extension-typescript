import React from 'react';
import Layout from '../../components/Layout';
import Home from '../../sections/Home';

const HomeScreen = ({ location }: any) => {
  console.log('home location: ', location);
  return (
    <Layout location={location}>
      <Home />
    </Layout>
  )
}

export default HomeScreen;
