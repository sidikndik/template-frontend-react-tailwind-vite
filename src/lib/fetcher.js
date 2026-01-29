const BASE_URL = "https://jsonplaceholder.typicode.com";

export async function fetcher(path, options = {}) {
  const token = localStorage.getItem("token");
  const isLoginEndpoint = path.includes("/login");

  const headers = {
    "Content-Type": "application/json",
    ...options.headers,
  };

  if (!isLoginEndpoint && !token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(`${BASE_URL}${path}`, {
    headers,
    ...options,
  });

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
}
