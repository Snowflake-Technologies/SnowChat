import { create } from "zustand";

import { socket }
from "../services/socket";

export interface ChatMessage {

  id?: string;

  author: string;

  content: string;

  timestamp: string;
}

interface ChatStore {

  messages:
    ChatMessage[];

  connect:
    () => void;

  sendMessage:
    (
      content: string
    ) => void;

  addMessage:
    (
      msg: ChatMessage
    ) => void;
}

export const useChatStore =
  create<ChatStore>(
    (set, get) => ({

      messages: [],

      connect: () => {

        socket.connect();

        socket.on(
          "message",
          (
            message:
            ChatMessage
          ) => {

            get()
              .addMessage(
                message
              );

          }
        );
      },

      sendMessage:
      (content) => {

        const message = {

          author:
            "You",

          content,

          timestamp:
            new Date()
            .toISOString()
        };

        socket.emit(
          "message",
          message
        );

        get()
          .addMessage(
            message
          );
      },

      addMessage:
      (message) => {

        set(
          state => ({

            messages: [

              ...state.messages,

              message
            ]
          })
        );

      }
    })
  );
