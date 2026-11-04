import { Router } from "express";
import store from "../store.js";
import { validate } from "../middlewares/validate.js";
import { createSchema, updateSchema } from "../schemas/links.js";

const router = Router();

// Listar todos los links
router.get("/", (req, res) => {
  const links = store.getAll();
  res.json(links);
});

router.post("/", validate(createSchema), async (req, res) => {
  if (store.findBySlug(req.body.slug)) {
    const error = new Error("El Slug ya existe");
    throw Object.assign(error, { status: 409 });
  }
  const link = await store.create(req.body);
  res.status(201).json(link);
});
// router.put("/",(req,res)=>{})
router.delete("/:id", async (req, res) => {
  if (!store.findById(req.params.id)) {
    const error = new Error("El Link no  existe");
    throw Object.assign(error, { status: 404 });
  }
  await store.deleteById(req.params.id);
  res.status(204).end();
});

export default router;
