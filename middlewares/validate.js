export const validate = (schema) => (req, res, next) => {
  const { error, value } = schema.validate(req.body);
  if (error) {
    throw Object.assign(error, { status: 400 });
  }
  req.body = value;
  next();
};
