import React from 'react';
import styled from '@emotion/styled';
import { Match, Link } from '@reach/router';

export interface NavLinkProps {
  to: string;
  className?: string;
  children?: any;
}

const NavLink: React.FunctionComponent<NavLinkProps> = styled(
  ({ to, className, children }) => {
    return (
      <Match path={to}>
        {(props) => (
          <Link
            to={to}
            className={`${className} ${
              props.match ? 'bg-green-400' : 'transparent'
            }`}
          >
            {children}
          </Link>
        )}
      </Match>
    );
  }
)``;

export default NavLink;
