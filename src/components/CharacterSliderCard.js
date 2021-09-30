import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const padding = '1rem';

const Additional = styled.div`
  background: rgba(0, 0, 0, 0.6);
  position: absolute;
  top: -100%;
  right: ${padding};
  left: ${padding};
  transition: all 0.3s;
  padding: 1rem;
  color: white;
  ul {
    list-style: none;
    line-height: 1.5em;
    strong {
      text-transform: uppercase;
      margin-right: 8px;
    }
  }
`;

const Card = styled(Link)`
  height: 600px;
  position:relative;
  display: block;
  padding: 0 ${padding};
  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &:hover ${Additional} {
    top: 0;
  }
`;

const Description = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem;
  color: white;
  line-height: 1.1em;
  h2 {
    margin: 0
  }
`;

const AdditionalFields = [
  // 'birthday',
  'category',
  'status',
  'occupation',
];
const getAdditionalList = (character) => AdditionalFields.map((field) => (
  <li key={field}>
    <strong>{field}</strong>
    {Array.isArray(character[field]) ? character[field].join(', ') : character[field]}
  </li>
));

const CharacterCard = ({ character }) => (
  <Card to={`/character/${character.char_id}`}>
    <img src={character.img} alt="" />
    <Description>
      <h2>{character.portrayed}</h2>
      <h4>{character.name}</h4>
    </Description>
    <Additional>
      <ul>{getAdditionalList(character)}</ul>
    </Additional>
  </Card>
);

CharacterCard.propTypes = {
  character: PropTypes.shape({
    char_id: PropTypes.number,
    img: PropTypes.string,
    name: PropTypes.string,
    portrayed: PropTypes.string,

  }),
};

CharacterCard.defaultProps = {
  character: {
    img: '',
    name: '',
    portrayed: '',
  },
};

export default CharacterCard;
