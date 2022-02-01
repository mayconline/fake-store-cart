import { render, screen, userEvent, CART_MOCK } from '../../utils/testProvider';
import Modal from './index';
import CartList from '../CartList';

const mockedHandleClose = jest.fn();

describe('Modal', () => {
  beforeEach(() => {
    const modalRoot = document.createElement('div');
    modalRoot.setAttribute('id', 'portal-root');
    document.body.appendChild(modalRoot);
  });

  it('should display modal', async () => {
    const { setCartProducts } = render(
      <Modal show={true} onClose={mockedHandleClose}>
        <CartList cartList={CART_MOCK({ quantity: 4 })} />
      </Modal>
    );

    screen.getByRole('heading', { name: /My Cart/i });

    const cartButton = screen.getByRole('button', {
      name: /my cart icon \$484.40/i,
    });
    const emptyCartButton = screen.getByRole('button', {
      name: /my cart icon Empty Cart/i,
    });

    userEvent.click(emptyCartButton);
    expect(setCartProducts).toBeCalledTimes(1);
    expect(setCartProducts).toBeCalledWith([]);

    const closeButton = screen.getByTitle(/close modal/i);
    userEvent.click(closeButton);

    expect(mockedHandleClose).toHaveBeenCalledTimes(1);
  });
});
