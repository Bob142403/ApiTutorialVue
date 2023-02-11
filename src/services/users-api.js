const baseUrl = "https://jsonplaceholder.typicode.com/users";

export const usersApi = {
  getUsers: async () => {
    return await fetch(baseUrl).then(response => response.json());
  }
};
