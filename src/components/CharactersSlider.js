/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-unresolved */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Slider from 'react-slick';

import CharactersService from 'services/characters.service';
import CharacterSliderCard from 'components/CharacterSliderCard';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import img from 'assets/images/Rhombus.gif';

const CharactersCarousel = styled(Slider)`
  margin: 0 -1rem;
  min-height: 37.5rem;
  .slick-arrow {
    z-index: 1;

  }
  .slick-prev:before, .slick-next:before {
    font-size: 2rem;
    color: var(--base-dark-1);
  }
`;

const CharactersSlider = () => {
  const [items, setItems] = useState([]);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    mobileFirst: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const loadData = () => {
    CharactersService.getRandom({ params: { limit: 6 } }, (data) => {
      setItems(data.data);
    }, (error) => {
      console.error('error', error);
    });
  };

  useEffect(() => {
    loadData();
  }, []);

  const list = items.map((item) => (<CharacterSliderCard key={item.char_id} character={item} />));

  const PreLoader = styled.div`
    width: 100%;
    height: 100%;
    min-height: 37.5rem;
    background: url('${img}') center no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const Content = list.length > 0
    ? <CharactersCarousel {...sliderSettings}>{list}</CharactersCarousel>
    : <PreLoader />;

  return (
    <div>
      {Content}
    </div>
  );
};

export default CharactersSlider;
