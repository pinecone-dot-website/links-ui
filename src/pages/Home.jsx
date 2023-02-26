import React from 'react';
import Links from '../components/Links';
import SEO from '../components/Seo';
import Profile from '../components/Profile';
import './Home.scss';

const Home = ({ address, links, styles }) => {
  return <div className="home">
    <main>
      <Profile styles={styles} />
      <Links links={links} />
      <SEO address={address} />
    </main>
  </div>
};

export default Home;