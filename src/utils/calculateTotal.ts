import {IItem} from '../components/AddItem';
import formatQuantity from './formatQuantity';

const calculateTotal = (list: IItem[]): string => {
  let total = 0;
  list.forEach(item => {
    // Remove caracteres não numéricos, exceto a vírgula
    const quantityWithoutNonNumeric = item.quantity.replace(/[^\d,]/g, '');
    const priceWithoutNonNumeric = item.price.replace(/[^\d,]/g, '');

    // Substitui vírgulas por pontos
    const quantityWithDot = quantityWithoutNonNumeric.replace(',', '.');
    const priceWithDot = priceWithoutNonNumeric.replace(',', '.');

    // Converte para float
    const quantity = parseFloat(quantityWithDot);
    const price = parseFloat(priceWithDot);

    if (!isNaN(quantity) && !isNaN(price)) {
      total += quantity * price;
    }
  });
  return formatQuantity(String(total));
};

export default calculateTotal;
