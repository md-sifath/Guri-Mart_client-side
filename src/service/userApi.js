export async function SaveUser(userData) {
  const res = await fetch('https://guri-martserver.vercel.app/users', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
  if (!res.ok) {
    throw new Error('User data could not save ');
  }
  const data = await res.json();
  return data;
}
