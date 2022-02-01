import { CART_MOCK } from '../../utils/testProvider';
import { renderHook, act } from '@testing-library/react-hooks';
import { CartProvider } from '../../contexts/cartContext';
import useCart from '.';

describe('UseCart', () => {
  it('should toogle open modal', async () => {
    const { result } = renderHook(() => useCart(), {
      wrapper: CartProvider,
    });

    expect(result.current.openModalCart).toBeFalsy();

    act(() => {
      result.current.setOpenModalCart(true);
    });

    expect(result.current.openModalCart).toBeTruthy();
  });

  it('should successfully calculate total amount', async () => {
    const { result } = renderHook(() => useCart(), {
      wrapper: CartProvider,
    });

    expect(result.current.totalAmount).toBe(0);

    act(() => {
      result.current.setCartProducts(CART_MOCK({ quantity: 1 }));
    });

    expect(result.current.totalAmount).toBe(154.55);
  });

  it('should includes products in cart', async () => {
    const { result } = renderHook(() => useCart(), {
      wrapper: CartProvider,
    });

    expect(result.current.cartProducts).toStrictEqual([]);

    act(() => {
      result.current.setCartProducts(CART_MOCK({ quantity: 10 }));
    });

    expect(result.current.cartProducts).toStrictEqual(
      CART_MOCK({ quantity: 10 })
    );
  });
});
