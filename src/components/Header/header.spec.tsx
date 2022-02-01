import { render, screen, userEvent, expect } from '../../utils/testProvider';
import Header from './index';

describe('Header', () => {
  it('should display header', async () => {
    const { setOpenModalCart } = render(<Header />);

    screen.getByRole('heading', { name: /Store Cart/i });
    const cartButton = screen.getByRole('button', {
      name: /my cart icon \$484.40/i,
    });

    userEvent.click(cartButton);
    expect(setOpenModalCart).toHaveBeenCalledTimes(1);
    expect(setOpenModalCart).toHaveBeenCalledWith(true);
  });
});
