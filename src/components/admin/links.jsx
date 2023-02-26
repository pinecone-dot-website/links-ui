/* eslint-disable no-undef */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  solid, regular, brands, icon,
} from '@fortawesome/fontawesome-svg-core/import.macro'; // <-- import styles to be used
import { parse_url } from '../../utils/sitemap';

const Links = ({ callback, links = [] }) => {
  const [links_, setLinks] = useState(links);

  const [linkData, setLinkData] = useState(
    // links_.map(parse_url)
    links.map(parse_url),
  );

  useEffect(() => {
    console.log('useEffect', linkData);
    callback(linkData);
  }, [linkData]);

  /**
     * Handle click event for add new link
     * @param {*} e
     */
  const clickAddLink = (e) => {
    setLinks([...links, '']);
    e.preventDefault();
  };

  /**
     * Save link data on blur
     * @param {*} e
     */
  const blurSaveLink = (e) => {
    console.log(e.target.value, e.target.name);

    const parsed = parse_url(e.target.value);

    linkData[e.target.name] = parsed;
    setLinkData(linkData);
  };

  /**
     *
     * @param {*} e
     */
  const handleTextChange = (e) => {
    console.log('handleTextChange', e.target.value, e.target.name);

    const parsed = parse_url(e.target.value);

    linkData[e.target.name] = parsed;
    setLinkData(linkData);
  };

  /**
     *
     * @param {*} ev
     */
  const handleDrag = (ev) => {
    const index = [...ev.target.parentNode.children].indexOf(ev.target);
    // console.log('setDragId', ev.target.parentNode.children, index);    // .indexOf(ev.target)
    setDragId(ev.currentTarget.id);
  };

  /**
     *
     * @param {*} ev
     */
  const handleDrop = (ev) => {
    // const dragBox = links.find((box) => box.id === dragId);
    // const dropBox = links.find((box) => box.id === ev.currentTarget.id);

    // const dragBoxOrder = dragBox.order;
    // const dropBoxOrder = dropBox.order;

    // const newBoxState = links.map((box) => {
    //     if (box.id === dragId) {
    //         box.order = dropBoxOrder;
    //     }
    //     if (box.id === ev.currentTarget.id) {
    //         box.order = dragBoxOrder;
    //     }
    //     return box;
    // });

    // setLinks(newBoxState);
  };

  console.log('linkData', linkData);
  return (
    <fieldset>
      <legend>Links</legend>
      <button onClick={clickAddLink}>Add</button>
      {linkData.map((link, i) => {
        return (
          <div
            draggable
            key={`link-${i}`}
            onDragOver={(ev) => ev.preventDefault()}
            onDragStart={handleDrag}
            onDrop={handleDrop}
          >
            <input
              name={`link[${i}]`}
              onBlur={blurSaveLink}
              onChange={handleTextChange}
              defaultValue={link.url}
            />
            <FontAwesomeIcon
              icon={solid('bars')}
            />
          </div>
        );
      })}
    </fieldset>
  );
};

export default Links;
