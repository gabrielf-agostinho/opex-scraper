import { Request, Response } from "express";
import { VolumesService } from "../services/volumes.service";

const express = require('express');

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    const volumes = await new VolumesService().getVolumes();

    res.send(volumes);
  }
  catch (err) {
    console.error(err);
  }
});

export default router;