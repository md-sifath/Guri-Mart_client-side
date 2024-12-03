export async function getProducts() {
  const res = await fetch('https://guri-martserver.vercel.app/products');

  if (!res.ok) {
    throw new Error(res.statusText);
  }
  const data = await res.json();

  if (data) {
    return data;
  }
}
