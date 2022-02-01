import Image from 'next/image';
import styles from './emptyCart.module.scss';

const EmptyCart = () => {
  return (
    <section className={styles.container}>
      <Image
        src="/assets/empty-cart.svg"
        alt="empty cart"
        width={250}
        height={250}
        layout="fixed"
      />
      <h3>No Items found!</h3>
    </section>
  );
};

export default EmptyCart;
