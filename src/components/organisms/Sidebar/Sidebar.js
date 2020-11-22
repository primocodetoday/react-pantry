﻿import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { logout } from 'assets/icons';
import { Logo } from 'components/atoms';
import { signOut } from 'redux/actions/authActions';
import { ROUTES } from 'routes';
import { useDispatch } from 'react-redux';
import { menuItems } from '../../../constants/menuItems';
import { Wrapper, MenuIcon } from './styles/styles';

// TODO Maybe make MenuIcon a Link

const Sidebar = () => {
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Logo to={ROUTES.home} />
      {menuItems.map((item) => (
        <MenuIcon
          key={item.name}
          as={NavLink}
          to={item.route}
          icon={item.icon}
          activeicon={item.activeIcon}
          activeclass="active"
        />
      ))}
      <MenuIcon key="logout" onClick={() => dispatch(signOut())} icon={logout} />
    </Wrapper>
  );
};

export default Sidebar;
