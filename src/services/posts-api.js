const baseUrl = "https://jsonplaceholder.typicode.com/posts";

export const postsApi = {
  getPosts: async () => {
    return await fetch(baseUrl).then((response) => response.json());
  },
};
