import { defineStore } from "pinia"; 

export const useDropdownStore = defineStore("dropdown", {
  state: () => ({
    messages: [], // Array für die Nachrichten
  }),
  actions: {
    addMessage(content, duration = 3000) {
      const id = Date.now(); // Eindeutige ID für jede Nachricht
      this.messages.push({ id, content });

      // Entfernen Sie die Nachricht nach der angegebenen Dauer
      setTimeout(() => {
        this.removeMessage(id);
      }, duration);
    },
    removeMessage(id) {
      this.messages = this.messages.filter((msg) => msg.id !== id);
    },
  },
});