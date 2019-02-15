asyncAnswers = {
  /**
   * Asynchronously returns a value via a promise. Example:
   * async('anyValue').then((result) => { return result === 'anyValue';});
   * 
   * @param value - Any value
   * @returns {then: function} A promise like object containing a then property.
   */
  async: async function async(value) {
    return await value
  },

  /**
   * Creates a promise that resolves with the data returned from an ajax call to the url url.
   * You may use jquery, XMLHttpRequest, or fetch.
   * https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
   * https://api.jquery.com/jQuery.ajax/
   * https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API   * 
   * 
   * @param {String} url - a valid url
   * @returns {then: function} A promise like object containing a then property.
   */
  manipulateRemoteData: async function manipulateRemoteData(url) {
    let promise = await new Promise(resolve => {
      let xhr = new XMLHttpRequest();
      xhr.open("GET", url, true);
      xhr.onload = (e) => {
        resolve(xhr.response);
      };
      xhr.onerror = (e) => {
        resolve(e);
      };
      xhr.send();
    })
    let people = JSON.parse(promise).people

    return people.sort((a, b) => {
      if (a.name < b.name)
        return -1;
      if (a.name > b.name)
        return 1;
      return 0;
    }).map(user => user.name)
  },

};
