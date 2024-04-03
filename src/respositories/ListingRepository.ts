import { DuplicateIdError } from '../errors/DuplicatedError';
import {Listing} from '../models/Listing';

export class ListingRepository {
  private listings: Listing[] = [];

  addListing(listing: Listing) {
    const existingListing = this.listings.find(existingListing => existingListing.id === listing.id);
    if (existingListing) {
      throw new DuplicateIdError(`Listing already exists`);
    }
    this.listings.push(listing);
  }

  getAllListings():Listing[] | [] {
    return this.listings;
  }

  deleteListing(id: string) {
    const index = this.listings.findIndex(listing => listing.id === id);
    if (index !== -1) {
        return this.listings.splice(index, 1);
    }
    return null;
  }
}