import { ProductListType } from '../../types';
import ProductItem from '../ProductItem';
import styles from './productList.module.scss';

const ProductList = ({ productList }: ProductListType) => {
  return (
    <section className={styles.container}>
      {productList?.map((list) => (
        <ProductItem key={list.id} {...list} />
      ))}
    </section>
  );
};

export default ProductList;
