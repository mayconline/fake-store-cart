import { render, screen, userEvent, CART_MOCK } from '../../utils/testProvider';
import CartItem from './index';

describe('CartItem', () => {
  it('should display item in cart', async () => {
    render(<CartItem {...CART_MOCK({ quantity: 4 })[0]} />);

    const img = screen.getByRole('img') as HTMLImageElement;
    expect(img.alt).toBe(
      'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops'
    );

    screen.getByText(/Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops/i);
    screen.getByText(/\$109.95 un/i);
    screen.getByText(/Total:\$439.80/i);

    screen.getByTitle(/4 units/i);
  });

  it('should add quantity to item', async () => {
    const { setCartProducts } = render(
      <CartItem {...CART_MOCK({ quantity: 4 })[0]} />
    );

    const addButton = screen.getByTitle(/add quantity/i);
    userEvent.click(addButton);

    expect(setCartProducts).toHaveBeenCalledTimes(1);
    expect(setCartProducts).toHaveBeenNthCalledWith(1, [
      ...CART_MOCK({ quantity: 5 }),
    ]);
  });

  it('should reduce quantity to item', async () => {
    const { setCartProducts } = render(
      <CartItem {...CART_MOCK({ quantity: 4 })[0]} />
    );

    const reduceButton = screen.getByTitle(/reduce quantity/i);
    userEvent.click(reduceButton);

    expect(setCartProducts).toHaveBeenCalledTimes(2);
    expect(setCartProducts).toHaveBeenNthCalledWith(2, [
      ...CART_MOCK({ quantity: 3 }),
    ]);
  });
});
