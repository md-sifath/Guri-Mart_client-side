export async function getFurnitures() {
  try {
    const res = await fetch('http://localhost:3000/furnitures');
    const data = await res.json();

    if (data) {
      return data;
    }
  } catch (err) {
    return err.message;
  }
}
