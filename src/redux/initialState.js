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
