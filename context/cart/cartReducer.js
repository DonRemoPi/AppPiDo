

export const cartReducer = (state, action) => {

  switch (action.type) {
    case '[Cart] - LoadCart from cookies | storage':
      return {
        ...state,
        cart: [...action.payload]
      }
    case '[Cart] - Update products in cart':
      return {
        ...state,
        cart: [...action.payload]
      }
    case '[Cart] - Change cart quantity':
      return {
        ...state,
        cart: state.cart.map(product => {
          if (product._id !== action.payload._id) return product
          if (product._size !== action.payload.size) return product

          return action.payload;

        })
      }
    case '[Cart] - Change cart size':
      return {
        ...state,
        cart: state.cart.map(product => {
          if (product._id !== action.payload._id) return product
          if (product._size !== action.payload.size) return product

          return action.payload;

        })
      };
    case '[Cart] - Remove product in cart':
      return {
        ...state,
        cart: state.cart.filter(product => !(product._id === action.payload._id && product.size === action.payload.size))
      };

    case '[Cart] - Update order summary':
      return {
        ...state,
        ...action.payload
      };
    case '[Cart] - Remove all products in cart':
      return {
        ...state,
        cart: state.cart = []
      };

    default:
      return state;
  }
}

