import VuexPersist from 'vuex-persist';
import { Store } from 'vuex';
import Cookies from 'js-cookie';
import { IShopCartState } from '../store/types';

interface IVuexPersistProps {
  store: Store<IShopCartState>;
}

declare global {
  interface Window {
    onNuxtReady?: any;
  }
}

export default ({ store }: IVuexPersistProps) => {
  if ('onNuxtReady' in window)
    window.onNuxtReady(() => {
      new VuexPersist({
        restoreState: (key) => {
          const state = Cookies.get(key);
          return state && JSON.parse(state);
        },
        saveState: (key, state) => {
          Cookies.set(key, JSON.stringify(state));
        },
        modules: ['cart', 'cartItems'],
      }).plugin(store);
    });
};
