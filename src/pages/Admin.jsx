/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  solid, regular, brands, icon,
} from '@fortawesome/fontawesome-svg-core/import.macro'; // <-- import styles to be used
import Home from './Home';
import Nav from '../components/admin/nav';
import Links from '../components/admin/links';
import './Admin.scss';

const Admin = (props) => {
  const [address, setAddress] = useState({
    'street-address': '665 3rd St.',
    'extended-address': 'Suite 207',
    locality: 'San Francisco',
    region: 'CA',
    'postal-code': '94107',
    'country-name': 'U.S.A.',
  });

  const [dragId, setDragId] = useState();

  // send links from links component to home
  const [links, setLinks] = useState([]);

  const [styles, setStyles] = useState({
    border: 10,
    boxShadow: 10,
    size: 150,
  });

  const [view, setView] = useState({
    device: 'phone',
  });

  const adjust = (prop) => {
    return (e) => {
      // console.log(e.target.value, prop);
      // styles[prop] = e.target.value;

      setStyles({ ...styles, [prop]: e.target.value });
      // console.log('adjust styles', styles);
    };
  };

  const changeView = (e) => {
    setView({ ...view, device: e.target.value });
    // console.log(e.target.value);
  };

  const handleAddressChange = (e) => {
    // e.target.value = 123;
    console.log('e.target.name', e.target.name, e.target.value);
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const saveForm = (e) => {
    console.log('saveForm', links);
    e.preventDefault();
  };

  console.log('address', address);

  return (
    <div className="container-fluid">
      <Nav />
      <div className="admin">
        <div className="panel">
          <form onSubmit={saveForm}>
            <input type="submit" />
            <fieldset>
              <legend>View</legend>
              <label>
                Mobile
                <input
                  onChange={changeView}
                  name="view"
                  type="radio"
                  value="mobile"
                />
              </label>
              <label>
                Tablet +
                <input
                  onChange={changeView}
                  name="view"
                  type="radio"
                  value="tablet"
                />
              </label>
            </fieldset>

            <fieldset>
              <legend>Heading</legend>
              <label>
                Shadow
                <input
                  type="range"
                  className="form-range"
                  onChange={adjust('boxShadow')}
                />
              </label>
              <label>
                Size
                <input
                  className="form-range"
                  type="range"
                  onChange={adjust('size')}
                  min="100"
                  max="250"
                />
              </label>
              <label>
                Border
                <input
                  className="form-range"
                  type="range"
                  onChange={adjust('border')}
                  min="0"
                  max="24"
                />
              </label>
              {/* <label>
                            Background Image
                            <input type="file" />
                        </label> */}
              <label>
                Profile Image
                <input type="file" />
              </label>
            </fieldset>

            <Links
              callback={setLinks}
              links={
                            [
                              'https://cash.app/aaa',
                              'https://insta.gram/bbb',
                            ]
                        }
            />

            <fieldset>
              <legend>Address</legend>

              <input
                onChange={handleAddressChange}
                name="street-address"
                placeholder="Street Address"
                defaultValue={address['street-address]']}
              />
              <input
                onChange={handleAddressChange}
                name="extended-address"
                placeholder="Extended Address"
                defaultValue={address['extended-address]']}
              />
              <input
                onChange={handleAddressChange}
                name="locality"
                placeholder="Locality"
                defaultValue={address['locality]']}
              />
              <input
                onChange={handleAddressChange}
                name="region"
                placeholder="Region"
                defaultValue={address['region]']}
              />
              <input
                onChange={handleAddressChange}
                name="postal-code"
                placeholder="Postal Code"
                defaultValue={address['postal-code]']}
              />
              <input
                onChange={handleAddressChange}
                name="country-name"
                placeholder="Country Name"
                defaultValue={address['country-name]']}
              />
            </fieldset>
          </form>
        </div>

        <div className="preview">
          <div className={`device ${view.device}`}>

            <div className="status">
              <span className="system">
                <FontAwesomeIcon
                  icon={solid('seedling')}
                />
              </span>
              <span className="info">1:00pm</span>
              <div className="notch" />
              <span className="info">
                <FontAwesomeIcon
                  icon={solid('tower-broadcast')}
                />
              </span>
            </div>
            <Home
              admin
              section="head"
              address={address}
              links={links}
              styles={styles}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
