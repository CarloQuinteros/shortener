import express from "express";
import store from "./store.js";

const app = express();
app.use(express.json());

app.get("/:slug", (req, res) => {
  const link = store.findBySlug(req.params.slug);
  if (!link) {
    const error = new Error("Link no existe");
    throw Object.assign(error, { status: 404 });
  }
  res.redirect(link.url);
});

app.use((err, req, res, next) => {
  const status = err.status || 500;

  res
    .status(status)
    .json({ error: status >= 500 ? "Oops, error interno lol " : err.message });
});
app.listen(process.env.PORT || 3000, () => {
  console.log("Escuchando...");
});
