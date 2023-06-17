import { useEffect, useReducer } from 'react';
import { CartContext, cartReducer } from './';
import Cookie from 'js-cookie'


const CART_INITIAL_STATE = {
  cart: []
}

export const CartProvider = ({ children }) => {

  const [state, dispatch] = useReducer(cartReducer, CART_INITIAL_STATE);

  // Recupera el contenido de las cookies
  useEffect(() => {
    try {
      const cookieProducts = Cookie.get('cart') ? JSON.parse(Cookie.get('cart')) : []
      dispatch({ type: '[Cart] - LoadCart from cookies | storage', payload: cookieProducts });
    } catch (error) {
      dispatch({ type: '[Cart] - LoadCart from cookies | storage', payload: [] });
    }
  }, []);


  // Guardar el estado del carrito en las cookies antes de refrescar o cerrar la ventana
  useEffect(() => {
    const handleBeforeUnload = () => {
      Cookie.set('cart', JSON.stringify(state.cart));
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [state.cart]);

  // Genera las cookies 
  useEffect(() => {
    if (state.cart.length > 0) Cookie.set('cart', JSON.stringify(state.cart));
  }, [state.cart]);


  // Actualiza el total y numero de productos comprados cuando cambia el tamaño o cantidad
  useEffect(() => {

    const numberOfItems = state.cart.reduce((prev, current) => current.quantity + prev, 0);


    const total = state.cart.reduce((prev, current) => {
      const price = current.size === 'r' ? current.priceR :
        current.size === 'm' ? current.priceM :
          current.size === 'g' ? current.priceG : 0;
      return (price * current.quantity) + prev;
    }, 0);

    const orderSummary = {
      numberOfItems,
      total
    }

    dispatch({ type: '[Cart] - Update order summary', payload: orderSummary })

  }, [state.cart]);


  // Agrega un producto al Cart
  const addProductToCart = (product) => {

    const productInCart = state.cart.some(p => p._id === product._id)
    if (!productInCart) return dispatch({ type: '[Cart] - Update products in cart', payload: [...state.cart, product] })

    const productInCartButDifferentSize = state.cart.some(p => p._id === product._id && p.size === product.size)
    if (!productInCartButDifferentSize) return dispatch({ type: '[Cart] - Update products in cart', payload: [...state.cart, product] })

    //Acumular
    const updatedProducts = state.cart.map(p => {
      if (p._id !== product._id) return p;
      if (p.size !== product.size) return p;

      //Actualizar la cantidad
      p.quantity += product.quantity
      return p;

    })
    dispatch({ type: '[Cart] - Update products in cart', payload: updatedProducts })

  }

  // Actualiza la cantidad directamente
  const updateCartQuantity = (product) => {
    dispatch({ type: '[Cart] - Change cart quantity', payload: product });
  }

  // Actualiza   el tamaño directamente
  const updateCartSize = (product) => {
    dispatch({ type: '[Cart] - Change cart size', payload: product })
  }

  //Elimina un producto del cart
  const removeCartProduct = (product) => {
    dispatch({ type: '[Cart] - Remove product in cart', payload: product })
  }

  //Elimina todos los productos del cart al cancelar o al enviar el pedido
  const removeAlllCartProducts = (product) => {
    dispatch({ type: '[Cart] - Remove all products in cart', payload: product })
  }



  return (
    <CartContext.Provider value={{
      ...state,

      //Methods
      addProductToCart,
      updateCartQuantity,
      updateCartSize,
      removeCartProduct,
      removeAlllCartProducts
    }}>
      {children}
    </CartContext.Provider>
  )
}
