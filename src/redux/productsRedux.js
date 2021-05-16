import axios from 'axios';

/* selectors */
export const getAll = ({products}) => products.data;
export const getSingleProduct = ({products}) => products.singleProduct;
export const getProductById = ({ products }, productId) => products.data.filter(product => product.id === productId)[0];

/* action name creator */
const reducerName = 'products';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');
const ADD_POST = createActionName('ADD_POST');
const EDIT_POST = createActionName('EDIT_POST');
const UPDATE_SINGLE_POST = createActionName('UPDATE_SINGLE_POST');
const UPDATE_ALL_PRODUCTS = createActionName('UPDATE_ALL_PRODUCTS');

/* action creators */
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });
export const addPost = payload => ({ payload, type: ADD_POST });
export const editPost = payload => ({ payload, type: EDIT_POST });
export const updateSingleProduct = payload => ({ payload, type: UPDATE_SINGLE_POST });
export const updateAllProducts = payload => ({ payload, type: UPDATE_ALL_PRODUCTS });

/* thunk creators */

export const EditPostRequest = (post) => {
  return (dispatch) => {

    dispatch(editPost(post));
  }
}

export const fetchPublished = () => {
  return (dispatch, getState) => {
    const { products } = getState();
    if(products.data.length) return false;
    dispatch(fetchStarted());
    
    axios
    .get('http://localhost:8000/api/products')
    .then(res => {
      dispatch(fetchSuccess());
      dispatch(updateAllProducts(res.data));
    })
    .catch(err => {
      dispatch(fetchError(err.message || true));
    });
  };
};

export const fetchPublishedById = (id) => {
  return (dispatch, getState) => {
    dispatch(fetchStarted());

    axios
    .get(`http://localhost:8000/api/products/${id}`)
    .then(res => {
      dispatch(updateSingleProduct(res.data));
      dispatch(fetchSuccess());
    })
    .catch(err => {
      dispatch(fetchError(err.message || true));
    });
  }
}

export const addPostRequest = (post) => {
  return (dispatch) => {
    dispatch(fetchStarted());
    axios.post("http://localhost:8000/api/products/add", post)
      .then(() => {
        dispatch(addPost(post));
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
    case ADD_POST: {
      return {
        ...statePart,
        data: [
          ...statePart.data,
          action.payload,
        ],
      };
    }
    case EDIT_POST: {
      const updatedData = statePart.data.map((post) => {
        if (post.id === action.payload.id) {
          return {
            ...action.payload,
          }
        } else {
          return post
        }
      });

      return {
        ...statePart,
        data: [
          ...updatedData,
        ],
      };
    }
    case UPDATE_SINGLE_POST: {
      return {
        ...statePart,
        singleProduct: action.payload
      }
    }
    case UPDATE_ALL_PRODUCTS: {
      return {
        ...statePart,
        data: action.payload
      } 
    }
    default:
      return statePart;
  }
};
