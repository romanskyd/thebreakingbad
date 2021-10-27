/* eslint-disable react/no-children-prop */
import React from 'react';
import PropTypes from 'prop-types';

import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer';

import styled from 'styled-components';
import device from 'utils/device';

const DefaultContainer = styled.div`
  min-height: 100vh;
  background: var(--white);
  padding-top: var(--header-height);
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 2rem 0;
  flex-grow: 1;
  @media ${device.laptop} {
    padding: 0;
  }
`;
const App = ({ children }) => (
  <DefaultContainer>
    <Header />
    <Main>
      {children}
    </Main>
    <Footer />
  </DefaultContainer>
);

App.propTypes = {
  children: PropTypes.element,
};
App.defaultProps = {
  children: null,
};

export default App;
