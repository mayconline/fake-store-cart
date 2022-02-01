export type ProductItemType = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
};

export type ProductListType = {
  productList: ProductItemType[];
};

export type ModalType = {
  show: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export type CartProducts = ProductItemType & {
  quantity: number;
};

export type CartListType = {
  cartList: CartProducts[];
};

export type CartContextType = {
  cartProducts: CartProducts[];
  setCartProducts: React.Dispatch<React.SetStateAction<CartProducts[]>>;
  openModalCart: boolean;
  setOpenModalCart: React.Dispatch<React.SetStateAction<boolean>>;
  totalAmount: number;
};
