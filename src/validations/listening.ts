import Joi from 'joi';

const listingSchema = Joi.object({
  id: Joi.string().required(),
  title: Joi.string().required(),
  price: Joi.number().required(),
  description: Joi.string().required(),
});

export default listingSchema