import { io } from "socket.io-client";

const URL =
  "http://localhost:3001";

export const socket = io(
  URL,
  {
    autoConnect: false,

    transports: [
      "websocket"
    ]
  }
);

socket.on(
  "connect",
  () => {

    console.log(
      "❄️ Connected:",
      socket.id
    );

  }
);

socket.on(
  "disconnect",
  () => {

    console.log(
      "Disconnected"
    );

  }
);
