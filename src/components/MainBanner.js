/** main banner below the search form */

import React from 'react';
import PropTypes from 'prop-types';

export default function MainBanner(props) {
  const { img, href } = props;
  return (
    <>
      <a href={href}>
        <img src={img} alt='main banner' />
      </a>
    </>
  );
}

MainBanner.propTypes = {
  img: PropTypes.string,
  href: PropTypes.string,
};
