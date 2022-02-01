import { memo } from 'react';
import styles from './productItem.module.scss';
import Image from 'next/image';
import { CartProducts, ProductItemType } from '../../types';
import { formatMoney } from '../../utils/format';
import { FaCartPlus } from 'react-icons/fa';
import useCart from '../../hooks/useCart';

const ProductItem = ({
  id,
  title,
  price,
  description,
  image,
}: ProductItemType) => {
  const { setOpenModalCart, cartProducts, setCartProducts } = useCart();

  const handleClick = (product: ProductItemType) => {
    const sameProductInCart = cartProducts.find(
      (cartProduct) => cartProduct.id === product.id
    );

    if (!sameProductInCart) {
      const newProduct: CartProducts = { ...product, quantity: 1 };

      setCartProducts((current) => [...current, newProduct]);
    }

    setOpenModalCart(true);
  };

  return (
    <article className={styles.container} data-testid={`row-${id}`}>
      <div className={styles.infoblock}>
        <figure>
          <Image
            src={image}
            alt={title}
            width={80}
            height={100}
            layout="fixed"
          />
        </figure>

        <main>
          <p>{title}</p>
          <p className={styles.description} title={description}>
            {description}
          </p>
          <p className={styles.price}>{formatMoney(price)}</p>
        </main>
      </div>
      <div>
        <button
          onClick={() => handleClick({ id, description, image, price, title })}
          title="add to cart"
        >
          <FaCartPlus className={styles.icon} />
          Add to Cart
        </button>
      </div>
    </article>
  );
};

export default memo(ProductItem);
