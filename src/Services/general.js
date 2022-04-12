function urlQueryParamToObject(URL) {
  const queryObject = {};
  const queryString = URL.split('?')[1];

  if (queryString) {
    const queryParams = queryString.split('&');

    for (let i = 0; i < queryParams.length; i += 1) {
      const [key, value] = queryParams[i].split('=');

      queryObject[key] = value;
    }
  }

  return queryObject;
}

function getFourRandom(array) {
  const randomArray = array.sort(() => 0.5 - Math.random()).slice(0, 4);
  return randomArray;
}

export {
  urlQueryParamToObject,
  getFourRandom,
};
