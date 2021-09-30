import React from 'react';
import styled from 'styled-components';

const DefaultFooter = styled.footer`
  height: 3rem;
  display: flex;
  align-items: center;
  background: var(--base-dark-1);
  p {
    max-width: 75rem;
    margin: 0 auto;
    color: var(--white);
  }
  a {
    color: var(--white);
    text-decoration: none;
  }
`;

const Footer = () => (
  <DefaultFooter>
    <p>
      Powered by
      <a href="https://breakingbadapi.com" rel="noreferrer" target="_blank">breakingbadapi.com</a>
    </p>
  </DefaultFooter>
);

export default Footer;
