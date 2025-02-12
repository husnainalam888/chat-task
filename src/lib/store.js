import { create } from "zustand";

const useStore = create((set) => ({
  messages: {},

  addMessage: (conversationId, newMessage) =>
    set((state) => ({
      messages: {
        ...state.messages,
        [conversationId]: [
          ...(state.messages[conversationId] || []),
          newMessage,
        ],
      },
    })),

  setMessages: (conversationId, messages) =>
    set((state) => ({
      messages: { ...state.messages, [conversationId]: messages },
    })),
}));

export default useStore;
