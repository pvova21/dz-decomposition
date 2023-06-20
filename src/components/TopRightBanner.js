/** top right banner template */

import React from 'react';
import PropTypes from 'prop-types';

export default function TopRightBanner({ img, href, title, text }) {
  return (
    <>
      <a href={href}>
        <img src={img} alt="top right banner"/>
        <h2>{title}</h2>
      </a>
      <span>{text}</span>
    </>
  );
}

TopRightBanner.propTypes = {
  img: PropTypes.string,
  href: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
};
