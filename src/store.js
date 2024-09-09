// store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';

// Configure the Redux store
const store = configureStore({
    reducer: {
        cart: cartReducer, // Associate the cartReducer with the 'cart' slice of state
    },
});

export default store;
