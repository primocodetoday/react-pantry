﻿import * as React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Text, SubText } from './Header.styles';

export const Header = ({ titleText, subTitleText, ...restProps }) => {
  return (
    <Wrapper {...restProps}>
      <Text>{titleText}</Text>
      <SubText>{subTitleText}</SubText>
    </Wrapper>
  );
};

Header.propTypes = {
  titleText: PropTypes.string.isRequired,
  subTitleText: PropTypes.string.isRequired,
};
