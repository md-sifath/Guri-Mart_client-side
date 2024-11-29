export async function getCloths() {
  const res = await fetch('http://localhost:3000/cloths');

  if (!res.ok) throw new Error(res.status);
  const data = await res.json();

  if (data) {
    return data;
  }
}
