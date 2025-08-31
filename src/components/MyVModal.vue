<template>
  <div class="v-modal-container">
    <!-- Trigger Element -->
    <div @click="open">
      <slot />
    </div>

    <!-- Modal Backdrop -->
    <transition name="fade">
      <div
        v-if="isOpen"
        class="v-modal-backdrop"
        @click.self="handleBackdropClick"
      >
        <!-- Modal Content -->
        <div class="v-modal">
          <div class="v-modal-content">
            <slot name="popper" />
          </div>
          <button
            v-if="showCloseButton"
            class="v-modal-close"
            @click="close"
          >
            &times;
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'VModal',
  props: {
    showCloseButton: {
      type: Boolean,
      default: true
    },
    closeOnClickOutside: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    open() {
      this.isOpen = true
    },
    close() {
      this.isOpen = false
    },
    toggle() {
      this.isOpen = !this.isOpen
    },
    handleBackdropClick() {
      if (this.closeOnClickOutside) {
        this.close()
      }
    }
  }
}
</script>

<style scoped>
.v-modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10002;
}

.v-modal {
  padding: 2rem;
  position: relative;
  max-width: 90%;
  max-height: 90vh;
  overflow: auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);

  background-color: var(--Background-Color);
  border-radius: 5px;
  text-align: center;
}

.v-modal-content {
  margin: 1rem 0;
}

.v-modal-close {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0 0.5rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}


</style>