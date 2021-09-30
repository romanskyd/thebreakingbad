/* eslint-disable import/no-unresolved */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import CharactersService from 'services/characters.service';
import CharacterListItem from 'components/CharacterListItem';

import img from 'assets/images/Rhombus.gif';

const Title = styled.h1`
  padding: 0 0.5rem;
`;

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

const Loader = styled.div`
display: flex;
justify-content: center;
`;

const Characters = () => {
  const LIMIT = 12;
  const [items, setItems] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [offset, setOffset] = useState(1);
  const [isEnd, setIsEnd] = useState(false);
  const loadSuccess = ({ data }) => {
    setIsFetching(false);
    if (data.length < LIMIT) {
      setIsEnd(true);
    }
    setItems([...items, ...data]);
    setOffset(offset + LIMIT);
  };

  const loadData = () => {
    CharactersService.getList(
      { limit: LIMIT, offset },
      (data) => {
        loadSuccess(data);
      },
      (error) => {
        console.error('error', error);
      },
    );
  };

  const scrollHandler = (e) => {
    const element = e.target.documentElement;
    const { scrollHeight, scrollTop } = element;
    if (scrollTop + window.innerHeight === scrollHeight) {
      setIsFetching(true);
    }
  };

  useEffect(() => {
    if (isFetching && !isEnd) {
      loadData();
    }
  }, [isFetching]);

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);
    return () => {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  const list = items.map((item) => (
    <CharacterListItem key={item.char_id} character={item} />
  ));

  return (
    <>
      <Title>Characters</Title>
      <List>{list}</List>
      {isFetching && !isEnd && <Loader><img src={img} alt="loading" /></Loader>}
    </>
  );
};

export default Characters;
