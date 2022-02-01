import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import ProductList from '../components/ProductList';
import api from '../services/api';
import { ProductListType } from '../types';
import Modal from '../components/Modal';
import useCart from '../hooks/useCart';
import CartList from '../components/CartList';
import Header from '../components/Header';

const Home = ({ productList }: ProductListType) => {
  const { openModalCart, setOpenModalCart, cartProducts } = useCart();

  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>
            Store Cart, the best offers for you - Using Fake Store API
          </title>
        </Head>

        <Header />

        <main className={styles.main}>
          <ProductList productList={productList} />
        </main>
      </div>

      <Modal show={openModalCart} onClose={() => setOpenModalCart(false)}>
        <CartList cartList={cartProducts} />
      </Modal>
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  try {
    const response = await api.get<ProductListType>('/products');

    return {
      props: {
        productList: response?.data,
      },
    };
  } catch (e) {
    console.error(e);
  }
};
