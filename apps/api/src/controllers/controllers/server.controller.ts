import { Request, Response } from "express";

import { prisma } from "../lib/prisma";

import { generateInviteCode }
from "../utils/generateInviteCode";

export async function createServer(
  req: Request,
  res: Response
) {

  try {

    const {
      name,
      ownerId
    } = req.body;

    const server =
      await prisma.snowServer.create({

        data: {

          name,

          ownerId,

          inviteCode:
            generateInviteCode()
        }
      });

    return res.status(201).json({
      success: true,
      server
    });

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      success: false
    });

  }
}

export async function getServers(
  req: Request,
  res: Response
) {

  const servers =
    await prisma.snowServer.findMany();

  return res.json({
    success: true,
    servers
  });

}
