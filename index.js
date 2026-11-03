import express from "express";
import store from "./store.js";

const app = express();
app.use(express.json());

app.get("/:slug", (req, res) => {
  const link = store.findBySlug(req.params.slug);
  res.json(link);
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Escuchando...");
});
