/* eslint-disable no-unused-vars */
import axios from 'axios';

class InstaService {
  accessToken = '234';

  userID = '123';

  authorize() {
    const response = this.requestApi('oauth/authorize');
  }

  getUserID() {
    const response = this.requestGraph(['id', 'username']);
    // console.log('response', response);
  }

  getUserMedia() {

  }

  /**
     *
     * @param {string} relative path
     * @returns
     */
  requestApi(path) {
    const u = new URL(path, 'https://api.instagram.com');

    const client_id = '';
    u.searchParams.set('client_id', client_id);

    const redirect_uri = 'http://localhost:3000/';
    u.searchParams.set('redirect_uri', redirect_uri);

    const response_type = '';
    u.searchParams.set('response_type', response_type);

    const scope = '';
    u.searchParams.set('scope', redirect_uri);

    // u.searchParams.set('state', state); // optional

    return axios.get(u.toString())
      .then((response) => response)
      .catch((err) => console.log('requestApi err', err));
  }

  requestGraph(fields = []) {
    const u = new URL('https://graph.instagram.com/me');

    u.searchParams.set('access_token', this.accessToken);
    u.searchParams.set('fields', fields.join(','));

    return axios.get(u.toString())
      .then((response) => response)
      .catch((err) => console.log('requestGraph err', err));
  }
}

export default InstaService;
