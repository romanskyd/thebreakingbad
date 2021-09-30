/* eslint-disable react/no-children-prop */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actionCreators from 'store/actions';

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
function App({ children }) {
  return (
    <DefaultContainer>
      <Header />
      <Main>
        {children}
      </Main>
      <Footer />
    </DefaultContainer>
  );
}

App.propTypes = {
  children: PropTypes.element,
};
App.defaultProps = {
  children: null,
};

// export default App;
export default connect(
  (state) => ({
    weather: state.weather,
    loading: state.loading,
    forecast: state.forecast,
  }),
  (dispatch) => ({ actions: bindActionCreators(actionCreators, dispatch) }),
)(App);
