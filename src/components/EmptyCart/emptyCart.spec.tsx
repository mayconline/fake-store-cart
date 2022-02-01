import { render, screen } from '../../utils/testProvider';
import EmptyCart from './index';

describe('Empty Cart', () => {
  it('should display empty cart', async () => {
    render(<EmptyCart />);

    const img = screen.getByRole('img') as HTMLImageElement;
    expect(img.alt).toBe('empty cart');

    screen.getByText(/No Items found!/i);
  });
});
