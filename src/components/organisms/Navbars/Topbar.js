﻿import React from 'react';
import { NavLink } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Logo from '../../atoms/Logo';
import { menuItems } from './menuItems';
import { Paragraph } from '../../atoms';

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  background-color: white;
  color: ${({ theme }) => theme.primary};
  width: 93vw;
  height: 65px;
  border-radius: 15px;
  padding-left: 10px;

  a {
    text-decoration: none;
  }

  a:visited {
    color: ${({ theme }) => theme.primary};
  }

  .active {
    color: ${({ theme }) => theme.secondary} !important;
  }
`;

const BurgerWrapper = styled.div`
  .bm-burger-button {
    position: absolute;
    width: 36px;
    height: 30px;
    right: 36px;
    top: 30px;
  }
  .bm-burger-bars {
    background: #ac3b61;
  }
  .bm-burger-bars-hover {
    background: #a90000;
  }
  .bm-cross-button {
    height: 40px;
    width: 40px;
  }
  .bm-cross {
    background: #ac3b61;
  }
  .bm-menu-wrap {
    position: fixed;
    top: 0;
    height: 60% !important;
  }
  .bm-menu {
    background: #fff;
    padding: 1rem 1rem 0;
    font-size: 3.3rem;
    border-radius: 0 0 0 15px;
    font-weight: 700;
  }
  .bm-morph-shape {
    fill: #373a47;
  }
  .bm-item-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
  }
  .bm-item {
    margin: 15px 0;
    display: inline-block;
    color: ${({ theme }) => theme.primary};

    &:last-child {
      margin-top: auto;
      cursor: pointer;
    }
  }
  .bm-overlay {
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.3);
  }
`;

const Topbar = ({ signOut }) => {
  return (
    <Wrapper>
      <NavLink to="/">
        <Logo />
      </NavLink>
      <BurgerWrapper>
        <Menu right>
          {menuItems.map((item) => (
            <NavLink to={item.route} key={item.name} activeclass="active">
              {item.name}
            </NavLink>
          ))}
          <Paragraph onClick={signOut}>Logout</Paragraph>
        </Menu>
      </BurgerWrapper>
    </Wrapper>
  );
};

Topbar.propTypes = {
  signOut: PropTypes.func.isRequired,
};

export default Topbar;
