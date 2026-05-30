import { Router } from "express";

import {
  createServer,
  getServers
}
from "../controllers/server.controller";

const router = Router();

router.post(
  "/",
  createServer
);

router.get(
  "/",
  getServers
);

export default router;
