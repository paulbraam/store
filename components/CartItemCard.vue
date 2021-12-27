<template>
  <div class="cart-item">
    <div class="cart-item__image-wrapper">
      <img :src="item.image" class="cart-item__image" />
    </div>
    <div class="cart-item__info">
      <h3 class="heading cart-item__title">{{ item.title }}</h3>
      <h5 class="sub_heading cart-item__price">${{ item.price }}</h5>
      <p class="cart-item__description">{{ item.description }}</p>
    </div>
    <div class="cart-item__actions">
      <h5 class="cart-item__count">{{ item.count }}</h5>
      <button
        class="cart-item__action-button button"
        @click="incrementItemCount(item.id)"
      >
        Добавить
      </button>
      <button
        class="cart-item__action-button button-danger"
        @click="removeItemFromCart(item.id)"
      >
        Удалить товар
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { mapActions } from 'vuex';
import CountControl from './CountControl.vue';

@Component({
  components: {
    CountControl,
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapActions('cart', [
      'addItemToCart',
      'incrementItemCount',
      'removeItemFromCart',
    ]),
  },
})
export default class CartItemCard extends Vue {}
</script>

<style lang="scss">
.cart-item {
  display: flex;
  border: 1px solid #f9f9f9;
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

  .cart-item__image-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    .cart-item__image {
      height: 150px;
      width: 150px;
      overflow: hidden;
      object-fit: cover;
    }
  }
  .cart-item__actions {
    margin: auto;
    flex: 0 0 auto;
    min-width: 100px;
  }
  .cart-item__actions > * {
    width: 100%;
  }
  .cart-item__info {
    padding: 1rem;
  }
  .cart-item__price {
    color: #3d61ff;
  }
  .cart-item__description {
    -webkit-line-clamp: 2;
    position: relative;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
  }
  .cart-item__title {
    -webkit-line-clamp: 1;
    position: relative;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
  }
  .cart-item__action-button {
    margin: 10px auto;
  }
  .cart-item__count {
    text-align: center;
  }
}
</style>
