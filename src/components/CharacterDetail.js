/* eslint-disable import/no-unresolved */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import CharactersService from 'services/characters.service';

const Detail = styled.section`
  max-width: 75rem;
  padding: 3rem 1.5rem;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  img {
    width: 18.75rem;
  }
`;

const List = styled.table`
  list-style: none;
  margin-left: 1.5rem;
`;
const ListItem = styled.tr`
td:first-child {
  text-transform: uppercase;
  font-weight: bold;
}
`;
const AdditionalFields = [
  'portrayed',
  'name',
  'nickname',
  'birthday',
  'category',
  'status',
  'occupation',
];
const getAdditionalList = (character) => AdditionalFields.map((field) => (
  <ListItem key={field}>
    <td>{field}</td>
    <td>{Array.isArray(character[field]) ? character[field].join(', ') : character[field]}</td>
  </ListItem>
));

const CharacterDetail = () => {
  const { id } = useParams();
  const [isInitLoading, setIsInitLoading] = useState(false);
  const [details, setDetails] = useState({});

  const loadData = () => {
    setIsInitLoading(true);
    CharactersService.item(id, (data) => {
      const [result] = data.data;
      setDetails(result);
    });
  };

  useEffect(() => {
    if (!isInitLoading) {
      loadData();
    }
  });

  return (
    <Detail>
      <img src={details.img} alt={details.name} title={details.name} />
      <List>
        {getAdditionalList(details)}
      </List>
    </Detail>
  );
};

export default CharacterDetail;
