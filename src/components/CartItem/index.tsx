import { memo } from 'react';
import styles from './cartItem.module.scss';
import Image from 'next/image';
import { CartProducts } from '../../types';
import { formatMoney } from '../../utils/format';
import { FaMinusSquare, FaPlusSquare } from 'react-icons/fa';
import useCart from '../../hooks/useCart';

const CartItem = ({
  id,
  title,
  price,
  description,
  image,
  quantity,
}: CartProducts) => {
  const { cartProducts, setCartProducts } = useCart();

  const handleReduceQuantity = ({ quantity, ...product }: CartProducts) => {
    let newCart = [] as CartProducts[];

    if (quantity <= 1) {
      newCart = cartProducts.filter(
        (cartProduct) => cartProduct.id !== product.id
      );
    } else {
      newCart = cartProducts.map((cartProduct) => ({
        ...cartProduct,
        quantity:
          cartProduct.id === product.id ? quantity - 1 : cartProduct.quantity,
      }));
    }

    setCartProducts(newCart);
  };

  const handleAddQuantity = ({ quantity, ...product }: CartProducts) => {
    const newCart = cartProducts.map((cartProduct) => ({
      ...cartProduct,
      quantity:
        cartProduct.id === product.id ? quantity + 1 : cartProduct.quantity,
    }));

    setCartProducts(newCart);
  };

  return (
    <>
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
            <p className={styles.unit}>{formatMoney(price)} un</p>
            <p className={styles.price}>
              Total:{formatMoney(quantity * price)}
            </p>
          </main>
        </div>
        <div className={styles.buttons}>
          <FaPlusSquare
            className={styles.icon}
            title="add quantity"
            onClick={() =>
              handleAddQuantity({
                id,
                description,
                image,
                price,
                title,
                quantity,
              })
            }
          />

          <p title={`${quantity} units`}>{quantity}</p>

          <FaMinusSquare
            className={styles.icon}
            title="reduce quantity"
            onClick={() =>
              handleReduceQuantity({
                id,
                description,
                image,
                price,
                title,
                quantity,
              })
            }
          />
        </div>
      </article>
      <hr />
    </>
  );
};

export default memo(CartItem);
