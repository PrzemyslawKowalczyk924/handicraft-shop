/* selectors */
export const getAll = ({ cart }) => cart.products;
export const getCount = ({ cart }) => {
  let arg = cart.products.length;
  console.log(arg);
  return cart.products.length;
}
/* action name creator */
const reducerName = 'cart';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const ADD_PRODUCT = createActionName('ADD_PRODUCT');
const CHANGE_AMOUNT = createActionName('CHANGE_AMOUNT');
const REMOVE_PRODUCT = createActionName('REMOVE_PRODUCT');

/* action creators */
export const addProduct = payload => ({ payload, type: ADD_PRODUCT });
export const changeAmount = payload => ({ payload, type: CHANGE_AMOUNT });
export const removeProduct = payload => ({ payload, type: REMOVE_PRODUCT });

/* reducer */
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case ADD_PRODUCT: {
      return {
        ...statePart,
        products: [...statePart.products, action.payload],
      };
    }
    case CHANGE_AMOUNT: {
      const newStatePart = statePart.products.map(product => {
        if (product.id === action.payload.id) {
          if (product.quantity == null) {
            product.quantity = 1;
          }
          if (action.payload.type === 'increase') {
            product.quantity = product.quantity + 1;
          }
          if (action.payload.type === 'decrease') {
            product.quantity = product.quantity - 1;
          }
        }
        return product;
      });
      return {
        products: newStatePart,
      };
    }
    case REMOVE_PRODUCT: {
      return {
        ...statePart,
        products: statePart.products.filter(
          product => product.id !== action.payload.id
        ),
      };
    }
    default:
      return statePart;
  }
}