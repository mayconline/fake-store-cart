import {
  render,
  screen,
  getByText,
  getByRole,
  PRODUCT_MOCK,
} from '../../utils/testProvider';
import ProductList from './index';

describe('ProductList', () => {
  it('should display successfully product list', async () => {
    render(<ProductList productList={PRODUCT_MOCK} />);

    const row1 = screen.getByTestId('row-1');
    getByText(row1, /Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops/i);
    getByText(
      row1,
      /Your perfect pack for everyday use and walks in the forest. Stash your laptop \(up to 15 inches\) in the padded sleeve, your everyday/i
    );
    getByText(row1, /\$109.95/i);

    const img1 = getByRole(row1, 'img') as HTMLImageElement;
    expect(img1.alt).toBe(
      'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops'
    );

    const row2 = screen.getByTestId('row-2');
    getByText(row2, /Mens Casual Premium Slim Fit T-Shirts/i);
    getByText(
      row2,
      /Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket./i
    );
    getByText(row2, /\$22.30/i);

    const img2 = getByRole(row2, 'img') as HTMLImageElement;
    expect(img2.alt).toBe('Mens Casual Premium Slim Fit T-Shirts ');
  });
});
