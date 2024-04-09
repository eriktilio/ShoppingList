const formatQuantity = (value: string): string => {
  const numericValue = parseFloat(value.replace(',', '.'));

  if (isNaN(numericValue)) {
    return '0.00';
  }

  return numericValue.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

export default formatQuantity;
