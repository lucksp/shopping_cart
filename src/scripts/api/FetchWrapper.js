const checkHttpStatus = response => {
  if (response.ok) {
    return response;
  } else {
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
};

const parseJson = response => {
  let json;
  try {
    json = response.json();
  } catch (error) {
    return json;
  }
};

export const fetchWrapper = async (url, method = "GET") => {
  const options = {
    url,
    method,
  };
  return await fetch(url, options)
    .then(checkHttpStatus)
    .then(parseJson)
    .then(data => {
      return data;
    })
    .catch(error => error);
};
