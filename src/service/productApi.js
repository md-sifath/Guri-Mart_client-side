export async function getProducts() {
  const res = await fetch('http://localhost:3000/products');

  if (!res.ok) {
    throw new Error(res.statusText);
  }
  const data = await res.json();

  if (data) {
    return data;
  }
}
