import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import { infoData } from '../../data/dataStore';

const Info = () => (
  <Container>
    <Hero titleText={infoData.title} image={infoData.image} />
    <p>{infoData.text}</p>
  </Container>
);

Info.propTypes = {
  image: PropTypes.node,
};

export default Info;