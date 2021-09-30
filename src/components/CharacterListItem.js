/* eslint-disable import/no-unresolved */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import device from 'utils/device';

const Card = styled(Link)`
  display: flex;
  width: 33%;
  padding: 0 0.5rem;
  text-decoration: none;
  transition: all 0.2s;
  margin-bottom: 1rem;
  @media ${device.laptop} {
    width: 50%;
  }
  @media ${device.tablet} {
    width: 100%;
  }
  img {
    height: 100%;
    width: 8.75rem;
    aspect-ratio: 2 / 3;
    object-fit: cover;
  }
  &:hover {
    transform: scale(1.01);
  }
`;

const Content = styled.div`
  height: 100%;
  background: red;
  flex-grow: 1;
  padding: 1.125rem;
  background-color: var(--base-grey-1);
  color: var(--base-dark-1);
  h2 {
    margin: 0;
  }
  h4 {
    color: var(--base-dark-2);
    text-transform: uppercase;
    font-size: 0.75em;
    margin: 0.125rem 0;
    margin-bottom: 0.5rem;
  }
`;

const ListItem = styled.p`
  margin: 0;
  font-size: 0.625rem;
  span {
    text-transform: uppercase;
    font-weight: bold;
    margin-right: 0.25rem;
  }
`;

const AdditionalFields = [
  // 'birthday',
  'category',
  'status',
  'occupation',
];
const getAdditionalList = (character) => AdditionalFields.map((field) => (
  <ListItem key={field}>
    <span>{field}</span>
    {Array.isArray(character[field]) ? character[field].join(', ') : character[field]}
  </ListItem>
));

const CharacterListItem = ({ character }) => (
  <Card to={`/character/${character.char_id}`}>
    <img src={character.img} alt={character.name} />
    <component title="0" />
    <Content>
      <h2>{character.portrayed}</h2>
      <h4>{character.name}</h4>
      {getAdditionalList(character)}
    </Content>
  </Card>
);

CharacterListItem.propTypes = {
  character: PropTypes.shape({
    char_id: PropTypes.number,
    img: PropTypes.string,
    name: PropTypes.string,
    portrayed: PropTypes.string,

  }),
};

CharacterListItem.defaultProps = {
  character: {
    char_id: 0,
    img: '',
    name: '',
    portrayed: '',
  },
};

export default CharacterListItem;
