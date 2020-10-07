const { CartActionTypes } = require('./cart.types');

export const toggleHidden = () => ({ type: CartActionTypes.TOGGLE_HIDDEN });
