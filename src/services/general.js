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

      queryObject[key] = value;
    }
  }

  return queryObject;
}

/**
 *
 * @param {*} array
 * @returns An array with four random elements from the input array
 */
function getFourRandom(array) {
  const randomArray = array.sort(() => 0.5 - Math.random()).slice(0, 4);
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

export {
  urlQueryParamToObject,
  getFourRandom,
  removeElementFromArray,
  addElementInArray,
};
