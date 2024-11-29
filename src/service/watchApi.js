export async function getWatches() {
  try {
    const res = await fetch('http://localhost:3000/watches');
    const data = await res.json();

    if (data) {
      return data;
    }
  } catch (err) {
    return err.message;
  }
}
