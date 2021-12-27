import { ActionTree, ActionContext } from 'vuex';
import RootState, { IShopCartState, IItem } from '../types';

export interface Actions<S, R> extends ActionTree<S, R> {
  addItemToCart(context: ActionContext<S, R>, name: IItem): void;
}

const actions: Actions<IShopCartState, RootState> = {
  addItemToCart(context, item: IItem) {
    context.commit('addItemToCart', item);
  },
  incrementItemCount(context, itemId: number) {
    context.commit('incrementItemCount', itemId);
  },
  decrementItemCount(context, itemId: number) {
    context.commit('decrementItemCount', itemId);
  },
  removeItemFromCart(context, itemId: number) {
    context.commit('removeItemFromCart', itemId);
  },
  clearCart(context) {
    context.commit('clearCart');
  },
};

export default actions;
