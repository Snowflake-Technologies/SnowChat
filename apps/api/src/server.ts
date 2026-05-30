import express from "express";
import cors from "cors";
import morgan from "morgan";
import http from "http";

import { Server } from "socket.io";

import { env } from "./config/env";

import authRoutes from "./routes/auth.routes";

const app = express();

const server =
  http.createServer(app);

const io = new Server(
  server,
  {
    cors: {
      origin: "*"
    }
  }
);

app.use(cors());

app.use(express.json());

app.use(morgan("dev"));

app.get("/", (_, res) => {
  res.json({
    app: "SnowChat API",
    status: "online"
  });
});

app.use(
  "/api/auth",
  authRoutes
);

/* ===========================================
   SOCKET.IO
=========================================== */

io.on(
  "connection",
  socket => {

    console.log(
      `Connected: ${socket.id}`
    );

    socket.on(
      "message",
      message => {

        io.emit(
          "message",
          message
        );

      }
    );

    socket.on(
      "disconnect",
      () => {

        console.log(
          `Disconnected: ${socket.id}`
        );

      }
    );
  }
);

server.listen(
  Number(env.PORT),
  () => {

    console.log(
      `❄️ SnowChat API running on ${env.PORT}`
    );

  }
);
