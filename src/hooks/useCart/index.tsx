import { useContext } from 'react';
import { CartContext } from '../../contexts/cartContext';

const useCart = () => {
  const context = useContext(CartContext);

  return context;
};

export default useCart;
