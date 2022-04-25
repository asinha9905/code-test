define(function (require, exports, module) {
module.exports = async function postData(url = '') {
    const response = await fetch(url, {
      mode: 'cors',
      cache: 'no-cache', 
      credentials: 'same-origin', 
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow', 
      referrerPolicy: 'no-referrer' 
    });
    return response.json(); 
  }
});
