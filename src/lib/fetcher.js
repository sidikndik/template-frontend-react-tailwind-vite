const BASE_URL = "https://jsonplaceholder.typicode.com";

export async function fetcher(path, options = {}) {
  const response = await fetch(`${BASE_URL}${path}`, {
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
}
