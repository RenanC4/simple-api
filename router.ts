import express, { Request, Response } from 'express';
import { ListingController } from './src/controllers/ListingController';
import { ListingRepository } from './src/respositories/ListingRepository';
import { DuplicateIdError } from  './src/errors/DuplicatedError';
import listingSchema from './src/validations/listening';

const router = express.Router();
const listingRepo = new ListingRepository();
const listingController = new ListingController(listingRepo);

router.post('/listings', (req: Request, res: Response) => {
  try {
    const { error } = listingSchema.validate(req.body);
    if (error) {
      res.status(400).send({ error: error.details[0].message });
      return;
    }
    const listing = listingController.addListing(req.body);
    res.status(201).send(listing);
  } catch (error) {
    if ((error as Error) instanceof DuplicateIdError) {
        res.status(409).send({ error: (error as Error).message });
    } else {
        res.status(500).send({ error: 'Internal Server Error' });
    }
  }
});

router.get('/listings', (req: Request, res: Response) => {
    const listings = listingController.getAllListings();
    res.send(listings);
});

router.delete('/listings/:id', (req: Request, res: Response) => {
    const { id } = req.params;
    const deletedListing = listingController.deleteListing(id);
    if (deletedListing) {
        res.send('Listing deleted');
    } else {
        res.status(404).send('Listing not found');
    }
});

export default router;