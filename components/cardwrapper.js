import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';

const Cardwrapper = ({ children, className }) => {
  return (
    <StyledCardWrapper className={className}>{children}</StyledCardWrapper>
  );
};

// Cardwrapper.propTypes = {
//   children: PropTypes.element.isRequired,
//   className: PropTypes.string,
// };

export default Cardwrapper;

const StyledCardWrapper = styled.div`
  background: #ffffff;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 25px;
`;
