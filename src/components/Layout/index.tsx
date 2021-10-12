import React from 'react';
import { Location } from '@reach/router';

interface LayoutProps {
  location: Location;
  children?: any;
}

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <main>
      {children}
    </main>
  )
}

export default Layout;
