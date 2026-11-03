import { Router } from "express";
import store from "../store.js";

const router = Router();

// Listar todos los links
router.get("/", (req, res) => {
  const links = store.getAll();
  res.json(links);
});
// router.post("/",(req,res)=>{})
// router.put("/",(req,res)=>{})
// router.delete("/",(req,res)=>{})

export default router;
