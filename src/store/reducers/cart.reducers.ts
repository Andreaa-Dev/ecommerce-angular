import { createReducer, on } from '@ngrx/store';

import * as CartActions from '../actions/cart.actions';
import { CartState } from 'src/models/cart.model';

export const initialCartState: CartState = [];

export const cartReducer = createReducer(
  initialCartState,
  on(CartActions.addProductCart, (state, { product }) => {
    const cart = {
      ...product,
      quantity: 1,
    };
    return [...state, cart];
  }),

  on(CartActions.increaseQuantity, (state, { cart }) => {
    const foundItem = state.find((item) => item.id === cart.id);
    if (foundItem) {
      return [
        ...state.filter((item) => item.id !== foundItem.id),
        { ...foundItem, quantity: foundItem.quantity + 1 },
      ];
    }
    return state;
  }),

  on(CartActions.decreaseQuantity, (state, { cart }) => {
    const foundItem = state.find((item) => item.id === cart.id);
    if (foundItem) {
      return [
        ...state.filter((item) => item.id !== foundItem.id),
        { ...foundItem, quantity: foundItem.quantity - 1 },
      ];
    }
    return state;
  })
);
