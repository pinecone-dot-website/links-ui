/* eslint-disable import/prefer-default-export */
const parse_url = (url) => {
  let link; let
    host = false;

  try {
    link = new URL(url);
    host = link.host;
  } catch (e) {
    console.log(e);
  }

  console.log(link);

  let parsed = {
    host,
    url,
  };

  switch (host) {
    default:
      parsed = { ...parsed, icon: 'generic.svg' };
      break;
  }

  return parsed;
};

export { parse_url };
