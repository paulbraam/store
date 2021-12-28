<template>
  <div>
    <div class="shop-wrapper">
      <div class="shop-grid">
        <ShopItemCard
          v-for="item in items"
          :key="item.id"
          :item="item"
          @incrementItemCount="incrementItemCount"
          @decrementItemCount="decrementItemCount"
          @onAddToCart="onAddToCart"
        />
      </div>
    </div>
    <Modal v-show="isModalVisible" :show-close-button="false">
      <template #body>Добавлено в корзину!</template>
    </Modal>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { mapState, mapActions } from 'vuex';
import ShopItemCard from '../../components/ShopItemCard.vue';
import { IItem } from '../../store/types';
import Modal from '../../components/Modal.vue';

@Component({
  async fetch(this: Products) {
    try {
      const data = await this.$axios.$get('/api/products');
      const items = data.map((item: IItem) => {
        item.count = 1;
        return item;
      });
      this.$set(this, 'items', items);
    } catch (err) {
      console.error(err);
    }
  },
  components: {
    ShopItemCard,
    Modal,
  },
  computed: {
    ...mapState('cart', ['cartItems']),
  },
  methods: {
    ...mapActions('cart', ['addItemToCart']),
  },
})
export default class Products extends Vue {
  items: IItem[] = [];
  isModalVisible: boolean = false;

  head() {
    return {
      title: 'Products',
    };
  }

  incrementItemCount(itemId: number) {
    this.items.forEach((item: IItem) => {
      if (item.id === itemId) {
        item.count++;
      }
    });
  }

  decrementItemCount(itemId: number) {
    this.items.forEach((item: IItem) => {
      if (item.id === itemId && item.count > 1) item.count--;
    });
  }

  onAddToCart() {
    this.isModalVisible = true;
    setTimeout(() => {
      this.isModalVisible = false;
    }, 1000);
  }
}
</script>

<style lang="scss">
.shop-grid {
  display: grid;
  padding: 1rem 5rem;
  grid-template-columns: 33.33% 33.33% 33.33%;
  @media (max-width: 965px) {
    grid-template-columns: 50% 50%;
    padding: 1rem 1rem;
  }
  @media (max-width: 481px) {
    grid-template-columns: 100%;
    padding: 1rem 0.2rem;
  }
}
.shop-wrapper {
  width: 100%;
  position: relative;
}
</style>
