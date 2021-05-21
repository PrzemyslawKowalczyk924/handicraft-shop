/* selectors */
export const getAll = ({cart}) => cart.products;
export const getPayment = ({cart}) => cart.payment;
export const getCount = ({cart}) => cart.products.length;

/* action name creator */
const reducerName = 'cart';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const ADD_PRODUCT = createActionName('ADD_PRODUCT');
const CHANGE_AMOUNT = createActionName('CHANGE_AMOUNT');
const REMOVE_PRODUCT = createActionName('REMOVE_PRODUCT');
const EDIT_PRODUCT = createActionName('EDIT_PRODUCT');
const GET_TOTAL_COST = createActionName('GET_TOTAL_COST');
const SEND_ORDER = createActionName('SEND_ORDER');

/* action creators */
export const addProduct = payload => ({ payload, type: ADD_PRODUCT });
export const changeAmount = payload => ({ payload, type: CHANGE_AMOUNT });
export const removeProduct = payload => ({ payload, type: REMOVE_PRODUCT });
export const editProduct = payload => ({ payload, type: EDIT_PRODUCT });
export const getTotalCost = payload => ({ payload, type: GET_TOTAL_COST });
export const sendOrder = payload => ({ payload, type: SEND_ORDER });

/* reducer */
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case ADD_PRODUCT: {
      return {
        ...statePart,
        products: [...statePart.products, action.payload],
      };
    }
    case SEND_ORDER: {
      return {
        ...statePart,
        order: [...statePart.order, action.payload],
      }
    }
    case EDIT_PRODUCT: {
      const updatedData = statePart.data.map((product) => {
        if (product.id === action.payload.id) {
          return {
            ...action.payload,
          }
        } else {
          return product
        }
      });

      return {
        ...statePart,
        data: [
          ...updatedData,
        ],
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
            product.totalCost = product.quantity * product.price;
          }
          if (action.payload.type === 'decrease') {
            product.quantity = product.quantity - 1;
            product.totalCost = product.quantity * product.price;
          }
        }
        return product;
      });
      return {
        products: newStatePart,
      };
    }
    case GET_TOTAL_COST: {
      const newStatePart = statePart.products.map(product => {
        return product.totalCost;
      });
      return {
        payment: newStatePart,
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