import { create } from "zustand";

import api from "../services/api";

export interface SnowServer {

  id: string;

  name: string;

  inviteCode: string;

  ownerId: string;
}

interface ServerStore {

  servers: SnowServer[];

  currentServer:
    SnowServer | null;

  fetchServers:
    () => Promise<void>;

  setCurrentServer:
    (server: SnowServer)
    => void;
}

export const useServerStore =
  create<ServerStore>(
    (set) => ({

      servers: [],

      currentServer:
        null,

      fetchServers:
      async () => {

        const res =
          await api.get(
            "/servers"
          );

        set({
          servers:
            res.data.servers
        });

      },

      setCurrentServer:
      (server) => {

        set({
          currentServer:
            server
        });

      }
    })
  );
