<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal">
        <div class="modal__content">
          <div class="modal__body">
            <slot name="body"> This is the default body! </slot>
          </div>
          <button
            v-if="showCloseButton"
            class="modal__close-button button"
            @click="close"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  props: {
    showCloseButton: {
      type: Boolean,
      default: true,
    },
  },
})
export default class Modal extends Vue {
  close() {
    this.$emit('close');
  }
}
</script>

<style lang="scss">
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #ffffff;
  box-shadow: 0px 0px 20px -12px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
}

.modal__content {
  padding: 1rem;
}

.modal__body {
  position: relative;
  padding: 20px 10px;
}

.modal__close-button {
  width: 100%;
}

.btn-green {
  color: white;
  background: #4aae9b;
  border: 1px solid #4aae9b;
  border-radius: 2px;
}
.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.2s ease;
}
</style>
