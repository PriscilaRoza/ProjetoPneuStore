export const api = {
  // Base Url
  baseUrl: "https://pneustoreapi20211004232226.azurewebsites.net",

  readAllGames: () => `${api.baseUrl}/pneu`,

  buildApiGetRequest: (url) =>
    fetch(url, {
      method: "GET",
    }),
};
