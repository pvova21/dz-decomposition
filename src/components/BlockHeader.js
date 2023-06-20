/** block headers */
import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

export default function BlockHeader(props) {
  const { items } = props;

  return (
    <>
      <h2>
        {items.map((item) => <a key={shortid.generate()} href={item.href}>{item.text}</a>)}
      </h2>
      {props.children}
    </>
  );
}

BlockHeader.propTypes = {
  items: PropTypes.array.isRequired,
  children: PropTypes.array,
};
