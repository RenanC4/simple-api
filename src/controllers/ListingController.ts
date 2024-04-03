import { Listing } from '../models/Listing';
import {ListingRepository } from '../respositories/ListingRepository';

export class ListingController {
  private listingRepo: ListingRepository;

  constructor(listingRepo: ListingRepository) {
    this.listingRepo = listingRepo;
  }

  addListing(listing: Listing): Listing {
    this.listingRepo.addListing(listing);
    return listing;
  }

  getAllListings(): Listing[] {
    return this.listingRepo.getAllListings();
  }

  deleteListing(id: string): Listing [] | boolean {
    try {
      const result = this.listingRepo.deleteListing(id);
      return result !== null;
    } catch (error) {
      console.error(error);
      return false;
    }  }
}