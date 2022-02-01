import {
  render,
  screen,
  waitFor,
  getByText,
  getByTitle,
  getByRole,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CartContext } from '../contexts/cartContext';

export const CART_MOCK = ({ quantity }: { quantity: number }) => [
  {
    id: 1,
    title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
    price: 109.95,
    description:
      'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    quantity,
  },
  {
    id: 2,
    title: 'Mens Casual Premium Slim Fit T-Shirts ',
    price: 22.3,
    description:
      'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
    image:
      'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
    quantity: 2,
  },
];

export const PRODUCT_MOCK = [
  {
    id: 1,
    title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
    price: 109.95,
    description:
      'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
  },
  {
    id: 2,
    title: 'Mens Casual Premium Slim Fit T-Shirts ',
    price: 22.3,
    description:
      'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
    image:
      'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
  },
];

const contextMock = {
  cartProducts: CART_MOCK({ quantity: 4 }),
  setCartProducts: jest.fn(),
  openModalCart: false,
  setOpenModalCart: jest.fn(),
  totalAmount: 484.4,
};

const testProvider = (children: JSX.Element) => {
  const renderUtils = render(
    <CartContext.Provider value={contextMock}>{children}</CartContext.Provider>
  );

  return {
    ...renderUtils,
    ...contextMock,
  };
};

export {
  testProvider as render,
  screen,
  waitFor,
  getByText,
  getByTitle,
  getByRole,
  userEvent,
};
