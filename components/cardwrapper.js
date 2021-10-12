import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';

const Cardwrapper = ({ children, className }) => {
  return (
    <StyledCardWrapper className={className}>{children}</StyledCardWrapper>
  );
};

export default Cardwrapper;

const StyledCardWrapper = styled.div`
  background: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  border-radius: 25px;
`;
