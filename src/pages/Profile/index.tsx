import React from 'react';
import Layout from '../../components/Layout';
import Profile from '../../sections/Profile';

const ProfileScreen = ({ location }: any) => {
  console.log('profile location: ', location);
  return (
    <Layout location={location}>
      <Profile />
    </Layout>
  );
};

export default ProfileScreen;
