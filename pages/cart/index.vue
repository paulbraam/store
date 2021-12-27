<template>
  <div>
    <div class="cart__wrapper">
      <p v-if="!cartItems.length" class="cart__placeholder">Корзина пуста</p>
      <div class="cart__items-grid">
        <CartItemCard v-for="item in cartItems" :key="item.id" :item="item" />
        <div v-if="cartItems.length" class="cart__order-wrapper">
          <h2>${{ getFinalPrice() }}</h2>
          <button class="cart__order-button button-info" @click="handleOrder">
            Оформить заказ
          </button>
        </div>
      </div>
    </div>
    <Modal
      v-show="isModalVisible"
      :show-close-button="true"
      @close="closeModal"
    >
      <template #body>Заказ успешно оформлен!</template>
    </Modal>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { mapState, mapActions } from 'vuex';
import CartItemCard from '../../components/CartItemCard.vue';
import Modal from '../../components/Modal.vue';
import { IItem } from '../../store/types';

@Component({
  components: {
    CartItemCard,
    Modal,
  },
  computed: {
    ...mapState('cart', ['cartItems']),
  },
  methods: {
    ...mapActions('cart', ['clearCart']),
  },
})
export default class Cart extends Vue {
  clearCart!: () => void;
  finalPrice: string = '0';
  isModalVisible: boolean = false;
  cartItems!: IItem[];

  showModal() {
    this.isModalVisible = true;
  }

  closeModal() {
    this.isModalVisible = false;
  }

  handleOrder() {
    this.clearCart();
    this.showModal();
  }

  getFinalPrice() {
    return this.cartItems
      .reduce((acc: number, item: IItem) => acc + item.count * item.price, 0)
      .toFixed(2);
  }
}
</script>

<style lang="scss">
.cart__items-grid {
  display: block;
  padding: 3rem 10rem;
  @media (max-width: 965px) {
    padding: 1rem;
  }
  @media (max-width: 481px) {
    padding: 0.2rem;
  }
}
.cart__order-wrapper {
  display: flex;
  justify-content: space-between;
  margin: 1rem;
  padding: 1rem;
  border-radius: 5px;

  @media (max-width: 965px) {
    padding: 1rem;
  }
  @media (max-width: 481px) {
    flex-direction: column;
    padding: 0.2rem;
  }
}
.cart__wrapper {
  width: 100%;
  position: relative;
}
.cart__placeholder {
  text-align: center;
}
.cart__order-button {
  height: 35px;
}
.cart__title {
  text-align: center;
}
</style>
