function urlQueryParamToObject(URL) {
  const queryObject = {};
  const queryString = URL.split('?')[1];

  if (queryString) {
    const queryParams = queryString.split('&');

    for (let i = 0; i < queryParams.length; i += 1) {
      let [key, value] = queryParams[i].split('=');

      if (key.includes('+')) {
        key = key.replace(/\+/g, ' ');
      }

      if (value.includes('+')) {
        value = value.replace(/\+/g, ' ');
      }

      queryObject[key] = value;
    }
  }

  return queryObject;
}

export default urlQueryParamToObject;
