export async function addToCart(cartItem) {
  const res = await fetch('http://localhost:3000/carts', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(cartItem),
  });
  //   console.log(res);
  if (!res.ok) throw new Error(res.status);
  const data = await res.json();
  //   console.log(data);
  return data;
}

export async function getCartItem(email) {
  const res = await fetch(`http://localhost:3000/carts?email=${email}`);
  if (!res.ok) throw new Error(res.status);
  const data = await res.json();
  if (data) return data;
}

export async function deleteCartAll(email) {
  const res = await fetch(`http://localhost:3000/carts?email=${email}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json',
    },
  });
  if (!res.ok) {
    throw new Error('Cart item is not delete');
  }
  const data = await res.json();
  if (data) return data;
}
