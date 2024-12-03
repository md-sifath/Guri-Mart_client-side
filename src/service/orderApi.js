export async function CreateOrder(orderData) {
  const res = await fetch('https://guri-martserver.vercel.app/orders', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(orderData),
  });

  if (!res.ok) throw new Error('You can not create Order');
  const data = await res.json();
  return data;
}

export async function GetOrderData(email) {
  const res = await fetch(`https://guri-martserver.vercel.app/orders?email=${email}`);

  if (!res.ok) throw new Error('There a problem to Get the order data');
  const data = await res.json();
  return data;
}

export async function GetAllOrder() {
  const res = await fetch('https://guri-martserver.vercel.app/orders');
  if (!res.ok) {
    throw new Error('There is a problem to get the data..Pls try again letter');
  }
  const data = await res.json();
  return data;
}
