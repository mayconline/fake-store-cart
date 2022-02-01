import { FaShoppingBag, FaShoppingCart } from 'react-icons/fa';
import useCart from '../../hooks/useCart';
import { formatMoney } from '../../utils/format';
import styles from './header.module.scss';

const Header = () => {
  const { totalAmount, setOpenModalCart } = useCart();

  return (
    <header className={styles.container}>
      <main className={styles.row}>
        <FaShoppingBag className={styles.icon} title="store cart logo" />
        <h1>Store Cart</h1>
      </main>
      <aside className={styles.row}>
        <button type="button" onClick={() => setOpenModalCart(true)}>
          <FaShoppingCart className={styles.icon} title="my cart icon" />
          {formatMoney(totalAmount)}
        </button>
      </aside>
    </header>
  );
};

export default Header;
