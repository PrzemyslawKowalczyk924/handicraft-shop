import axios from 'axios';

/* selectors */
export const getAll = ({cart}) => cart.products;
export const getPayment = ({cart}) => cart.payment;
export const getCount = ({cart}) => cart.products.length;
//export const getLocalStorageCart = () => localStorage.getItem('cartProducts');

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
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');
const LEAVE_COMMENT = createActionName('LEAVE_COMMENT');
const GET_TOTAL_CART_PRODUCTS = createActionName('GET_TOTAL_CART_PRODUCTS');

/* action creators */
export const addProduct = payload => ({ payload, type: ADD_PRODUCT });
export const changeAmount = payload => ({ payload, type: CHANGE_AMOUNT });
export const removeProduct = payload => ({ payload, type: REMOVE_PRODUCT });
export const editProduct = payload => ({ payload, type: EDIT_PRODUCT });
export const getTotalCost = payload => ({ payload, type: GET_TOTAL_COST });
export const sendOrder = payload => ({ payload, type: SEND_ORDER });
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });
export const leaveComment = payload => ({ payload, type: LEAVE_COMMENT });
export const getTotalCartProducts = payload => ({ payload, type: GET_TOTAL_CART_PRODUCTS });

/* THUNK */

export const addToCartRequest = (product) => {
  return (dispatch) => {
    dispatch(fetchStarted());
    axios.post("http://localhost:8000/api/orders", product)
      .then(() => {
        dispatch(sendOrder(product));
        dispatch(fetchSuccess());
      })  
    .catch((err) => {
      dispatch(fetchError(err.message || true));
    });
  };
};

/* reducer */
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case ADD_PRODUCT: {

      let check = statePart.products.find(product => product._id === action.payload._id);

      if(!check) {
        return {
          ...statePart,
          products: [...statePart.products, action.payload],
        };
      } else {

        let items = statePart.products.filter(product => product._id === action.payload._id);

        items.forEach(item => {
          item.isInCart = true;
          console.log(item);
          alert('Already in cart! Enter cart to edit your order.');
        });

        return {
          ...statePart
        }
      };
    }
    case SEND_ORDER: {
      return {
        ...statePart,
        cart: [...statePart.cart, action.payload],
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
    case LEAVE_COMMENT: {
      const newStatePart = statePart.products.map(product => {
        if (product._id === action.payload._id) {
          product.comment = action.payload;
        }
        return product;
      });
      return {
        ...statePart,
        products: newStatePart,
      };
    }
    case CHANGE_AMOUNT: {
      const newStatePart = statePart.products.map(product => {
        if (product._id === action.payload._id) {
          if (product.quantity == null) {
            product.quantity = 1;
          }
          if (action.payload.type === 'increase') {
            product.quantity = product.quantity + 1;
            product.totalCost = product.quantity * product.price;
          }
          if (action.payload.type === 'decrease') {
            if (product.quantity > 1) {
              product.quantity = product.quantity - 1;
            }
            product.totalCost = product.quantity * product.price;
          }
        }
        return product;
      });
      return {
        ...statePart,
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
    case GET_TOTAL_CART_PRODUCTS: {
      const newStatePart = statePart.products.map(product => {
        return product.quantity;
      });
      return {
        products: newStatePart,
      };
    }
    case REMOVE_PRODUCT: {
      return {
        ...statePart,
        products: statePart.products.filter(
          product => product._id !== action.payload._id
        ),
      };
    }
    case FETCH_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
      };
    }
    case FETCH_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }
    default:
      return statePart;
  }
}