/**
 *
 * @param {*} URL string
 * @returns An object created from the query string
 */
function urlQueryParamToObject(URL) {
  const queryObject = {};
  const queryString = URL.split('?')[1];

  if (queryString) {
    const queryParams = queryString.split('&');

    for (let i = 0; i < queryParams.length; i += 1) {
      const [key, value] = queryParams[i].split('=');

      queryObject[key] = decodeURIComponent(value.replace(/\+/g, ' '));
    }
  }
  return queryObject;
}

/**
 *
 * @param {*} num Quantity of elements to return
 * @param {*} array Array to return elements from
 * @returns An array with four random elements from the input array
 */
function getRandomFromArray(num, array) {
  const randomArray = array.sort(() => 0.5 - Math.random()).slice(0, num);
  return randomArray;
}

/**
 *
 * @param {*} element element to remove inside from the array
 * @param {*} array array that will be modifided
 * @returns An array without the input element,
 * if the element is not found inside the array it will return the same array
 */
function removeElementFromArray(element, array) {
  const position = array.indexOf(element);
  if (position === -1) {
    return array;
  }
  array.splice(position, 1);
  return array;
}

/**
 *
 * @param {*} element element to insert
 * @param {*} array array to insert element into
 * @returns An array with the element inserted at the end
 */
function addElementInArray(element, array) {
  array.splice(array.length - 1, 0, element);
  return array;
}

/**
 *
 * @param {*} URL string
 * @returns Returns an array with the values from the query param, all decoded
 */
function urlQueryParamValuesToArray(URL) {
  const queryObject = urlQueryParamToObject(URL);
  const valuesArray = Object.values(queryObject);
  return valuesArray;
}

/**
 *
 * @param {*} URL string
 * @param {*} value string
 * @returns Returns an object with the value remove from Object.values(query params)
 */
function removeQueryValueFromObject(URL, value) {
  let queryObject = urlQueryParamToObject(URL);
  const keysArray = Object.keys(queryObject);
  const valuesArray = Object.values(queryObject);

  const indexToRemove = valuesArray.indexOf(value);
  if (indexToRemove === -1) { return queryObject; }

  queryObject = {};
  valuesArray.splice(indexToRemove, 1);
  keysArray.splice(indexToRemove, 1);

  for (let i = 0; i < keysArray.length; i += 1) {
    queryObject[keysArray[i]] = decodeURIComponent(valuesArray[i].replace(/\+/g, ' '));
  }
  return queryObject;
}

export {
  urlQueryParamToObject,
  urlQueryParamValuesToArray,
  getRandomFromArray,
  removeElementFromArray,
  addElementInArray,
  removeQueryValueFromObject,
};
