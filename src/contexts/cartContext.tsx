import React, { createContext, useCallback, useEffect, useState } from 'react';
import { CartContextType, CartProducts } from '../types';
import { sumTotalAmount } from '../utils/calc';

export const CartContext = createContext<CartContextType>(
  {} as CartContextType
);

export const CartProvider: React.FC = ({ children }) => {
  const [cartProducts, setCartProducts] = useState<CartProducts[]>(
    [] as CartProducts[]
  );
  const [openModalCart, setOpenModalCart] = useState<boolean>(false);
  const [totalAmount, setTotalAmount] = useState(0);

  const calculateTotalAmount = useCallback(() => {
    const calcAmount = sumTotalAmount(cartProducts);

    return setTotalAmount(calcAmount);
  }, [cartProducts]);

  useEffect(() => {
    calculateTotalAmount();
  }, [calculateTotalAmount]);

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        setCartProducts,
        openModalCart,
        setOpenModalCart,
        totalAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
