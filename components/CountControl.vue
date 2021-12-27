<template>
  <div class="count-control">
    <button
      class="count-control__action_button count-control__decrement_button button"
      @click="decrementCount"
    >
      -
    </button>
    <p class="shop-item__description">{{ count }}</p>
    <button
      class="count-control__action_button count-control__increment_button button"
      @click="incrementCount"
    >
      +
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  props: {
    count: {
      type: Number,
      default: 1,
    },
  },
})
export default class CountControl extends Vue {
  incrementCount() {
    this.$emit('onIncrement');
  }

  decrementCount() {
    this.$emit('onDecrement');
  }
}
</script>

<style lang="scss">
.count-control {
  display: flex;
  margin: auto;
  max-width: 120px;
}
.count-control__action_button {
  margin: auto;
}
.count-control__decrement_button {
  margin-left: 0;
}
.count-control__increment_button {
  margin-right: 0;
}
</style>
