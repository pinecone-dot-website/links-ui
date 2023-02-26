/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React from 'react';
import Cash from './links/Cash';
import Insta from './links/Insta';
import Generic from './links/Generic';
import Link from './Link';

import './Links.scss';

const Links = ({ links = [] }) => {
  const parseLink = (link, i) => {
    console.log('parseLink', link);
    // let host;
    // try {
    //     const l = new URL(link);
    //     host = l.host;
    // } catch (e) {
    //     console.log(e);
    // }

    // switch (host) {
    //     case 'cash.app':
    //         return <Cash key={i} />;
    //         break;

    //     case 'insta.gram':
    //         return <Insta key={i} />;
    //         break;

    //     default:
    //         return <Generic key={i} />;
    //         break;
    // }
  };

  return (
    <section className="links">
      <h2>Links</h2>

      {links.map((link, i) => (
        <Link
          key={i}
          link={link}
        />
      ))}
      {/* { JSON.stringify(links) } */}
    </section>
  );
};

export default Links;
