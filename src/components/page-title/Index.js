import React from 'react';
import PropTypes from 'prop-types';

const PageTitle = ({ titleText }) => (
  <h1>{titleText}</h1>
);

PageTitle.propTypes = {
  titleText: PropTypes.string.isRequired
};

export default PageTitle;
