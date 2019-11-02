const url = "http://localhost:3333/";

function handleHttpErrors(res) {
  if (!res.ok) {
    return Promise.reject({ status: res.status });
  }
  return res.json();
}

const countryFacade = () => {
  const getLabels = () => {
    return fetch(url + "labels").then(handleHttpErrors);
  };

  const getCountries = () => {
    return fetch(url + "countries").then(handleHttpErrors);
  };
  return {
    getLabels,
    getCountries
  };
};

export default countryFacade();
