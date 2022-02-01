import {
  render,
  screen,
  getByText,
  getByTitle,
  getByRole,
  CART_MOCK,
} from '../../utils/testProvider';
import CartList from './index';

describe('CartList', () => {
  it('should display successfully cart list', async () => {
    render(<CartList cartList={CART_MOCK({ quantity: 4 })} />);

    const row1 = screen.getByTestId('row-1');
    getByText(row1, /Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops/i);
    getByText(row1, /\$109.95 un/i);
    getByText(row1, /Total:\$439.80/i);
    getByTitle(row1, /4 units/i);

    const img1 = getByRole(row1, 'img') as HTMLImageElement;
    expect(img1.alt).toBe(
      'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops'
    );

    const row2 = screen.getByTestId('row-2');
    getByText(row2, /Mens Casual Premium Slim Fit T-Shirts/i);
    getByText(row2, /\$22.30 un/i);
    getByText(row2, /Total:\$44.60/i);
    getByTitle(row2, /2 units/i);

    const img2 = getByRole(row2, 'img') as HTMLImageElement;
    expect(img2.alt).toBe('Mens Casual Premium Slim Fit T-Shirts ');
  });

  it('should display empty cart', async () => {
    render(<CartList cartList={[]} />);

    const img = screen.getByRole('img') as HTMLImageElement;
    expect(img.alt).toBe('empty cart');

    screen.getByText(/No Items found!/i);
  });
});
