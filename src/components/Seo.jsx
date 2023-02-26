import React from 'react';

const SEO = ({ address }) => {
  return (
    <>
      <h4>Seo</h4>

      <div className="adr">
        <div className="street-address">{address['street-address']}</div>
        <div className="extended-address">{address['extended-address']}</div>
        <span className="locality">{address.locality}</span>
        {address.locality && address.region ? ', ' : ''}
        <span className="region">{address.region}</span>
        <span className="postal-code">{address['postal-code']}</span>
        <div className="country-name">{address['country-name']}</div>
      </div>
    </>
  );
};

export default SEO;
