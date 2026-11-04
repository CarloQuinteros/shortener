import Joi from "joi";

const schema = Joi.object({
  id: Joi.string().alter({
    create: (s) => s.forbidden(),
    update: (s) => s.required(),
  }),
  url: Joi.string()
    .uri({ scheme: ["http", "https"] })
    .pattern(/[;\r\n]/, { invert: true })
    .required(),
  slug: Joi.string()
    .pattern(/[;\r\n]/, { invert: true })
    .required(),
});

export const createSchema = schema.tailor("create");
export const updateSchema = schema.tailor("update");
