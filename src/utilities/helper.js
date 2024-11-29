export function formatCurrency(num) {
  const value = new Intl.NumberFormat('bd-BD', {
    style: 'currency',
    currency: 'BDT',
  }).format(num);
  return value;
}

export function formatDate(date) {
  const optionDate = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };
  const optionTime = {
    hour: 'numeric',
    minute: 'mumeric',
    hour12: false,
  };
  console.log(date);

  const formattedDate = date.toLocaleDateString(optionDate);

  const formattedTime = date.toLocaleTimeString(optionTime);

  return `${formattedDate} ${formattedTime}`;
}
