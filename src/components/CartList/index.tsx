import { CartListType } from '../../types';
import CartItem from '../CartItem';
import EmptyCart from '../EmptyCart';
import styles from './cartList.module.scss';

const CartList = ({ cartList }: CartListType) => {
  return (
    <section className={styles.container}>
      {!!cartList.length ? (
        cartList?.map((products) => (
          <CartItem key={products.id} {...products} />
        ))
      ) : (
        <EmptyCart />
      )}
    </section>
  );
};

export default CartList;
