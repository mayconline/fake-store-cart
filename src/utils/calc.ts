import { CartProducts } from '../types';

export const sumTotalAmount = (cartProducts: CartProducts[]) => {
  const calcAmount = cartProducts.reduce(
    (acc, cur) => acc + cur.quantity * cur.price,
    0
  );

  return calcAmount;
};
