import {
  render,
  screen,
  userEvent,
  PRODUCT_MOCK,
} from '../../utils/testProvider';
import ProductItem from './index';

describe('ProductItem', () => {
  it('should display product item', async () => {
    const { setOpenModalCart } = render(<ProductItem {...PRODUCT_MOCK[0]} />);

    const img = screen.getByRole('img') as HTMLImageElement;
    expect(img.alt).toBe(
      'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops'
    );

    screen.getByText(/Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops/i);
    screen.getByText(
      /Your perfect pack for everyday use and walks in the forest. Stash your laptop \(up to 15 inches\) in the padded sleeve, your everyday/i
    );
    screen.getByText(/\$109.95/i);

    const addCartButtton = screen.getByRole('button', { name: 'add to cart' });
    userEvent.click(addCartButtton);

    expect(setOpenModalCart).toHaveBeenCalledTimes(1);
    expect(setOpenModalCart).toHaveBeenCalledWith(true);
  });
});
