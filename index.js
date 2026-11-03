import express from "express";

const app = express();
app.use(express.json());

app.get("/:slug", () => {
  res.json({ text: "Hola Mundo" });
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Escuchando...");
});
