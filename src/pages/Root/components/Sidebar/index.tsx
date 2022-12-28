import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUsers, FaTachometerAlt, FaBrain, FaBars } from 'react-icons/fa';
import { GrClose } from 'react-icons/gr';
import {
  NavContainer,
  NavHeader,
  NavList,
  NavListItem,
  NavbarMobile,
  NavButton,
  NavMobileOverlay,
  NavMobileHeader,
  NavMobileOverlayCloseBtn
} from './styles';

const routes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    icon: <FaTachometerAlt />,
  },
  {
    path: '/users',
    name: 'Users',
    icon: <FaUsers />,
  }
];

export default () => {
  const [isOpen, setIsOpen] = useState(false);
  // add a sidebar navigation component
  function handlerClose() {
    setIsOpen(false);
  };

  function handlerOpen() {
    setIsOpen(true);
  };

  return (
    <>
      <NavContainer aria-label='Sidebar'>
        <NavHeader><FaBrain />CtrlHub</NavHeader>
        <NavList>
          {routes.map((route) => (
            <Link to={route.path} key={route.name}>
              <NavListItem>{route.icon}{route.name}</NavListItem>
            </Link>
          ))}
        </NavList>
      </NavContainer>
      <NavbarMobile>
        <NavButton onClick={handlerOpen}><FaBars /></NavButton>
      </NavbarMobile>
      {
        isOpen && (
          <NavMobileOverlay>
            <NavMobileOverlayCloseBtn onClick={handlerClose}><GrClose /></NavMobileOverlayCloseBtn>
            <NavMobileHeader><FaBrain />CtrlHub</NavMobileHeader>
            <NavList>
              {routes.map((route) => (
                <Link to={route.path} key={route.name} onClick={handlerClose}>
                  <NavListItem>{route.icon}{route.name}</NavListItem>
                </Link>
              ))}
            </NavList>
          </NavMobileOverlay>
        )
      }
    </>
  );
};
