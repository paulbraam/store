<template>
  <div class="shop-item">
    <div class="shop-item__image-wrapper">
      <img :src="item.image" class="shop-item__image" />
    </div>
    <h3 class="heading shop-item__title">{{ item.title }}</h3>
    <h5 class="sub_heading shop-item__price">${{ item.price }}</h5>
    <p class="shop-item__description">{{ item.description }}</p>
    <CountControl
      :count="item.count"
      @onIncrement="incrementItemCount(item.id)"
      @onDecrement="decrementItemCount(item.id)"
    />
    <button
      class="shop-item__add-to-cart-button button-info"
      @click="handleAddToCart(item)"
    >
      В корзину
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { mapActions } from 'vuex';
import { IItem } from '../store/types';
import CountControl from './CountControl.vue';

@Component({
  name: 'ShopItemCard',
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
    ...mapActions('cart', ['addItemToCart']),
  },
})
export default class ShopItemCard extends Vue {
  addItemToCart!: (item: IItem) => void;
  isModalVisible: boolean = false;

  incrementItemCount(itemId: number) {
    this.$emit('incrementItemCount', itemId);
  }

  decrementItemCount(itemId: number) {
    this.$emit('decrementItemCount', itemId);
  }

  handleAddToCart(item: IItem) {
    this.addItemToCart(item);
    this.$emit('onAddToCart');
  }
}
</script>

<style lang="scss">
.shop-grid {
  display: grid;
  padding: 3rem;
  grid-template-columns: 33.33% 33.33% 33.33%;
  @media (max-width: 965px) {
    grid-template-columns: 50% 50%;
    padding: 1rem;
  }
  @media (max-width: 481px) {
    grid-template-columns: 100%;
    padding: 0.2rem;
  }
}
.shop-item {
  border: 1px solid #f9f9f9;
  margin: 1rem;
  padding: 1rem;
  border-radius: 5px;
  // -webkit-box-shadow: 0px 0px 28px -25px rgb(0 0 0 / 52%);
  // box-shadow: 0px 0px 28px -25px rgb(0 0 0 / 52%);
  .shop-item__image-wrapper {
    display: flex;
    justify-content: center;
    .shop-item__image {
      height: 300px;
      overflow: hidden;
      object-fit: cover;
      width: 260px;
    }
  }
  .shop-item__price {
    color: #3d61ff;
  }
  .shop-item__description {
    -webkit-line-clamp: 2;
    position: relative;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
  }
  .shop-item__title {
    -webkit-line-clamp: 1;
    position: relative;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
  }
  .shop-item__add-to-cart-button {
    margin: auto;
  }
}

.wrapper {
  width: 100%;
  position: relative;
}
</style>
