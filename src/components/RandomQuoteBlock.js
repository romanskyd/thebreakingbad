import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import QuotesService from 'services/quotes.service';

const Quote = styled.div`
  padding: 1.5rem 1rem 1.5rem 3rem;
  margin: 1.5rem 0;

  background-color: var(--base-grey-1);
  position: relative;
  margin-left: 1rem;
  &:before {
    content: '';
    position: absolute;
    width: 0.25rem;
    background: var(--base-dark-1);
    top: 0;
    bottom: 0;
    left: -1rem;
  }
`;
const Italic = styled.i`
  display: block;
  text-align: right;
  margin: 0.5rem;
`;

const Title = styled.h2``;

const RandomQuoteBlock = () => {
  const [quote, setQuote] = useState({});

  const loadData = () => {
    QuotesService.getRandom({ params: { limit: 1 } }, (data) => {
      const [result] = data.data;
      setQuote(result);
    }, (error) => {
      console.error('error', error);
    });
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Quote>
      <Title>Random quote</Title>
      {quote.quote}
      <Italic>{quote.author}</Italic>
    </Quote>
  );
};

export default RandomQuoteBlock;
