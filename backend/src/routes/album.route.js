import { Router } from "express";
import { getAlbumById, getAllAlbums, deleteAlbum } from "../controllers/album.controller.js";

const router = Router();

router.get("/", getAllAlbums);
router.get("/:albumId", getAlbumById);
router.delete("/:albumId", deleteAlbum);

export default router;
