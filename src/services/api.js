export const api = {
  // Base Url
  baseUrl: "http://localhost:44357",

  readAllGames: () => `${api.baseUrl}/pneu`,

  buildApiGetRequest: (url) =>
    fetch(url, {
      method: "GET",
    }),
};
