/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React from 'react';
import InstaService from '../../services/insta';
import Link from '../Link';
import './Insta.scss';

const Insta = (props) => {
  // const instas = new InstaService();
  // instas.authorize();
  return (
    <article className="insta">
      <h3>Insta</h3>
      <Link display="@ccc" />

      {/* <div className="feed">
            <img src="https://via.placeholder.com/150" />
            <img src="https://via.placeholder.com/150" />
            <img src="https://via.placeholder.com/150" />
            <img src="https://via.placeholder.com/150" />
        </div> */}
    </article>
  );
};

export default Insta;
