/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './Profile.scss';

const Profile = ({ admin, styles }) => {
  // console.log('Profile styles', styles);

  const [state, setState] = useState({
    bio: 'Hello there!',
  });

  const clickBio = (e) => {
    setState({
      ...state,
      bio_edit: true,
    });
  };

  const saveBio = (e) => {
    setState({
      ...state,
      bio_edit: false,
    });
  };

  const mouseOver = (e) => {
    // console.log(e.nativeEvent);
  };

  const updateBio = (e) => {
    setState({
      ...state,
      bio: e.target.value,
    });
  };

  console.log('styles', styles);
  return (
    <section className="bio" onMouseMove={mouseOver}>

      <span
        className="avatar"
        style={{
          borderWidth: `${styles?.border || 0}px`,
          boxShadow: `${styles?.boxShadow || 0}px ${styles?.boxShadow || 0}px ${(styles?.boxShadow * 2) || 0}px rgba(0,0,0,.5)`,
          height: `${styles?.size || 0}px`,
          transform: `translate(${(styles?.boxShadow || 0) / -2}px, ${(styles?.boxShadow || 0) / -2}px)`,
          width: `${styles?.size || 0}px`,
        }}
      >
        <img
          className=""
                // onMouseMove={mouseOver}
                // src="https://via.placeholder.com/100"
          src="/img/profile.jpg"
        />
      </span>

      <h1>The Coolest Guy</h1>

      {state.bio_edit ? (
        <textarea
          className="form-control"
          onChange={updateBio}
          onBlur={saveBio}
        >
          {state.bio}
        </textarea>
      ) : (
        <p
          onClick={clickBio}
        >
          {state.bio}
        </p>
      )}

    </section>
  );
};

export default Profile;
