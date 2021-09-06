import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import { faqData } from '../../data/dataStore';

const FAQ = () => (
  <Container>
    <Hero titleText={faqData.title} image={faqData.image} />
    <p>{faqData.text}</p>
  </Container>
);

FAQ.propTypes = {
  image: PropTypes.node,
};

export default FAQ;