export const initialState = {
  products: {
    data: [],
    loading: {
      active: false,
      error: false,
    },
    singleProduct: {},
  },
  cart: {
    products: [],
    order: [],
  },
};

/* const cartProducts_inLS = localStorage.getItem('cartProducts');

if (cartProducts_inLS !== null) {

  initialState = {
    ...initialState,
    cart: {
      products: cartProducts_inLS,
      ...initialState.order,
    },
  };
} */

//export default initialState;