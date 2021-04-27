const URL = "http://localhost:3000/api";

export const customFetchGet = async (enpoint) => {
  const response = await fetch(`${URL}/${enpoint}`);
  const result = await response.json();
  return result;
};

export const customFetchPost = async (enpoint,data) => {
    const response = await fetch(`${URL}/${enpoint}`,{
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        // mode: 'cors', // no-cors, *cors, same-origin
        // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        // credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
        },
        // redirect: 'follow', // manual, *follow, error
        // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data) // body data type must match "Content-Type" header
      });
    const result = await response.json();
    return result;
  };