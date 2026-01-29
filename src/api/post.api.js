import { fetcher } from "@/lib/fetcher";

export const getPost = () => {
  return fetcher("/posts");
};

export const getPostById = (id) => {
  return fetcher(`/posts/${id}`);
};

export const filterPost = (params) => {
  const query = new URLSearchParams(params).toString();
  return fetcher(`/posts?${query}`);
};

export const createPost = (post) => {
  return fetcher(`/posts`, {
    method: "POST",
    body: JSON.stringify(post),
  });
};

export const updatePost = (id, post) => {
  return fetcher(`/posts/${id}`, {
    method: "PUT",
    body: JSON.stringify(post),
  });
};

export const deletePost = (id) => {
  return fetcher(`/posts/${id}`, {
    method: "DELETE",
  });
};
