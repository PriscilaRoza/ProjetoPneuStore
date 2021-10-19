export const api = {
  // Base Url
  baseUrl: "https://localhost:44357",

  readAll: () => `${api.baseUrl}/pneu`,

  buildApiGetRequest: (url) =>
    fetch(url, {
      method: "GET",
    }),
};
