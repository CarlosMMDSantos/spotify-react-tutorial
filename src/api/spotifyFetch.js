const baseUrl = 'https://api.spotify.com/v1'

async function request(url, params, accessToken = '', method = 'GET') {

    const headers = {
        'Authorization': 'Bearer ' + accessToken
    }

    const options = {
      method,
      headers: headers
    };
  
    if (params) {
      if (method === 'GET') {
        url += '?' + objectToQueryString(params);
      } else {
        options.body = JSON.stringify(params);
      }
    }

    const response = await fetch(baseUrl + url, options);
  
    if (response.status !== 200) {
      return generateErrorResponse('The server responded with an unexpected status.');
    }
  
    const result = await response.json();
  
    return result;
  
  }
  
  function objectToQueryString(obj) {
    return Object.keys(obj).map(key => key + '=' + obj[key]).join('&');
  }
  
  function generateErrorResponse(message) {
    return {
      status : 'error',
      message
    };
  }
  
  function get(url, params, accessToken) {
    return request(url, params, accessToken);
  }
  
  function create(url, params, accessToken) {
    return request(url, params, accessToken, 'POST');
  }
  
   function update(url, params, accessToken) {
    return request(url, params, accessToken, 'PUT');
  }
  
  function remove(url, params, accessToken) {
    return request(url, params, accessToken, 'DELETE');
  }
  
  export default {
    get,
    create,
    update,
    remove
  };