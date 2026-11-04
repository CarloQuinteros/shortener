export const sameId = (req, res, next) => {
  if (req.body.id !== req.params.id) {
    const error = new Error("El id no coincide con la URL");
    throw Object.assign(error, { status: 400 });
  }
  next();
};
