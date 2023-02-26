/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import './Link.scss';

const Link = ({ display, link }) => {
  const tracking = (e) => {
    // console.log('tracking', e);
    e.preventDefault();
  };

  return (
    <a
      className="btn btn-primary"
      role="button"
      href={link.url}
      onClick={tracking}
    >
      {link.host}
    </a>
  );
};

export default Link;
