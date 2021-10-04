export const api = {
  // Base Url
  baseUrl: "http://localhost:3001",

  readAllGames: () => `${api.baseUrl}/games`,

  buildApiGetRequest: (url) =>
    fetch(url, {
      method: "GET",
    }),
};
