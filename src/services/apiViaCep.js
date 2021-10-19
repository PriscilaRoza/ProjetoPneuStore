export const apiViaCep = {
  // Base Url
  baseUrl: "https://viacep.com.br/ws",

  readCep: (cep) => `${apiViaCep.baseUrl}/${cep}/json/`,

  buildApiGetRequest: (url) =>
    fetch(url, {
      method: "GET",
    }),
};
