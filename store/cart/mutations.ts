import { MutationTree } from 'vuex';
import { IShopCartState, IItem } from '../types';

const mutations: MutationTree<IShopCartState> = {
  addItemToCart(state, item: IItem) {
    const currentItem = state.cartItems.find((i) => i.id === item.id);
    currentItem
      ? (currentItem.count = currentItem.count + item.count)
      : state.cartItems.push(item);
  },
  incrementItemCount(state, itemId: number) {
    state.cartItems.forEach((item) => {
      if (item.id === itemId) item.count++;
    });
  },
  decrementItemCount(state, itemId: number) {
    const match = (item: IItem) => item.id === itemId;
    const item = state.cartItems.find(match);
    if (item) {
      const itemIndex = state.cartItems.findIndex(match);
      item.count > 1 ? item.count-- : state.cartItems.splice(itemIndex, 1);
    }
  },
  removeItemFromCart(state, itemId: number) {
    const match = (item: IItem) => item.id === itemId;
    const item = state.cartItems.find(match);
    if (item) {
      const itemIndex = state.cartItems.findIndex(match);
      state.cartItems.splice(itemIndex, 1);
    }
  },
  clearCart(state) {
    state.cartItems = [];
  },
};

export default mutations;
