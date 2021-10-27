import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { loadCharacters } from 'store/actions/characterActions';
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
  const dispatch = useDispatch();
  const { items, isEnd } = useSelector((state) => state.characters);
  const LIMIT = 12;
  const [isFetching, setIsFetching] = useState(true);

  const loadData = () => {
    dispatch(loadCharacters(LIMIT)).then(() => {
      setIsFetching(false);
    });
  };

  const scrollHandler = (e) => {
    const element = e.target.documentElement;
    const { scrollHeight, scrollTop } = element;
    if (scrollTop + window.innerHeight === scrollHeight) {
      setIsFetching(true);
    }
  };

  useEffect(() => {
    if (isFetching) {
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
