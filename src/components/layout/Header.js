/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import device from 'utils/device';
import img from 'assets/images/logo.svg';

const HeaderWrapper = styled.header`
  min-height: var(--header-height);
  background: var(--base-dark-1);
  position: relative;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 1;
  display: flex;
  align-items: center;
`;
const Navigation = styled.nav`
  max-width: 75rem;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  transition: all 0.6s;
  @media ${device.laptop} {
    position: absolute;
    top: 0;
    width: 100%;
    flex-direction: column;
    background: var(--base-dark-1);
    height: auto;
    visibility: translateY(${(props) => (props.show ? 'visible' : 'hidden')});
    transform: translateY(${(props) => (props.show ? '0' : '-100%')});
    padding: 0.5rem 0;
  }
`;
const NavItem = styled(NavLink)`
  color: var(--white);
  text-decoration: none;
  text-transform: uppercase;
  margin: 0 1rem;
  padding-bottom: 2px;
  margin-bottom: -2px;
  @media ${device.laptop} {
    margin: 16px 0;

  }
  &.active {
    border-bottom: 2px solid var(--white);
  }
`;

const Logo = styled(NavLink)`
  display: block;
  position: absolute;
  left: 1.5rem;
  background: url(${img}) center/ contain no-repeat;
  width: 7.5rem;
  top: 0.5rem;
  bottom: 0.5rem
`;

const Toggle = styled.button`
  width: 1.5rem;
  height: 1.5rem;
  border: none;
  background: url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 1.2C0 1.01435 0.0702379 0.836301 0.195262 0.705025C0.320286 0.57375 0.489856 0.5 0.666667 0.5H11.3333C11.5101 0.5 11.6797 0.57375 11.8047 0.705025C11.9298 0.836301 12 1.01435 12 1.2C12 1.38565 11.9298 1.5637 11.8047 1.69497C11.6797 1.82625 11.5101 1.9 11.3333 1.9H0.666667C0.489856 1.9 0.320286 1.82625 0.195262 1.69497C0.0702379 1.5637 0 1.38565 0 1.2ZM0 6.8C0 6.61435 0.0702379 6.4363 0.195262 6.30503C0.320286 6.17375 0.489856 6.1 0.666667 6.1H11.3333C11.5101 6.1 11.6797 6.17375 11.8047 6.30503C11.9298 6.4363 12 6.61435 12 6.8C12 6.98565 11.9298 7.1637 11.8047 7.29498C11.6797 7.42625 11.5101 7.5 11.3333 7.5H0.666667C0.489856 7.5 0.320286 7.42625 0.195262 7.29498C0.0702379 7.1637 0 6.98565 0 6.8Z' fill='%23F3F3F3'/%3E%3C/svg%3E%0A") center no-repeat;
  position: absolute;
  right: 1.5rem;
  top: calc( (100% - 1.5rem) / 2 );
  display: none;
  @media ${device.laptop} {
    display: block;
  }
`;
const routes = [
  {
    show: true,
    path: '/',
    name: 'Home',
  },
  {
    show: true,
    path: '/characters',
    name: 'Characters',
  },
  {
    show: false,
    path: '/episodes',
    name: 'Episodes',
  },
  {
    show: false,
    path: '/quotes',
    name: 'Quotes',
  },
  {
    show: false,
    path: '/deaths',
    name: 'Deaths',
  },
];

const navList = routes.filter((route) => route.show).map(
  (route) => (<NavItem exact to={route.path} key={route.path}>{route.name}</NavItem>),
);

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const toggleBehavior = () => setToggle(!toggle);

  return (
    <HeaderWrapper>
      <Logo to="/" />
      <Navigation show={toggle}>
        {navList}
      </Navigation>
      <Toggle onClick={toggleBehavior} />
    </HeaderWrapper>
  );
};

export default Header;
