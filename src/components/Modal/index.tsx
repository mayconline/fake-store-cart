import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import styles from './modal.module.scss';
import {
  FaCartArrowDown,
  FaRegCreditCard,
  FaShoppingCart,
  FaWindowClose,
} from 'react-icons/fa';
import { ModalType } from '../../types';
import { formatMoney } from '../../utils/format';
import useCart from '../../hooks/useCart';

const Modal = ({ show, onClose, children }: ModalType) => {
  const [isBrowser, setIsBrowser] = useState(false);
  const { totalAmount, setCartProducts } = useCart();

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleClose = () => {
    onClose();
  };

  const Content = show ? (
    <aside className={styles.overlay}>
      <section className={styles.container}>
        <header className={styles.header}>
          <div className={styles.title}>
            <FaShoppingCart className={styles.icon} title="my cart icon" />
            <h2>My Cart</h2>
          </div>

          <FaWindowClose
            className={styles.icon}
            title="close modal"
            onClick={handleClose}
          />
        </header>

        <main className={styles.body}>{children}</main>

        <footer className={styles.footer}>
          <button
            type="reset"
            disabled={!totalAmount}
            onClick={() => setCartProducts([])}
          >
            <FaCartArrowDown
              className={styles.emptyIcon}
              title="my cart icon"
            />
            Empty Cart
          </button>

          <button type="button" disabled={!totalAmount}>
            <FaRegCreditCard className={styles.addIcon} title="my cart icon" />
            {formatMoney(totalAmount)}
          </button>
        </footer>
      </section>
    </aside>
  ) : null;

  return isBrowser
    ? ReactDOM.createPortal(
        Content,
        document.getElementById('portal-root') as HTMLElement
      )
    : null;
};

export default Modal;
