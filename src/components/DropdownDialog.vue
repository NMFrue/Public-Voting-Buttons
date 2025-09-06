<template>
  <div class="dropdown-container">
    <transition-group name="fade" tag="div">
      <div
        v-for="(message, index) in messages"
        :key="message.id"
        class="dropdown-dialog"
        :style="{ top: `${index * 60 + 20}px` }"
      >
        {{ message.content }}
      </div>
    </transition-group>
  </div>
</template>

<script>
import { useDropdownStore } from "@/stores/dropdownStore";
import { storeToRefs } from "pinia";

export default {
  setup() {
    const dropdownStore = useDropdownStore();
    const { messages } = storeToRefs(dropdownStore);

    return {
      messages,
    };
  },
};
</script>

<style scoped>
.dropdown-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  pointer-events: none; /* Container ignoriert Maus-Ereignisse */
}

.dropdown-dialog {
  background-color: #323232;
  color: white;
  padding: 10px 20px;
  z-index: 1000;
  margin-top: 10px;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>