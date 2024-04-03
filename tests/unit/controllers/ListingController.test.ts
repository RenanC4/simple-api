import { ListingController } from '../../../src/controllers/ListingController';
import { ListingRepository } from '../../../src/respositories/ListingRepository';

describe('ListingController', () => {
  let repo: ListingRepository;
  let controller: ListingController;

  beforeEach(() => {
    repo = new ListingRepository();
    controller = new ListingController(repo);
  });

  test('addListing adds a listing and returns it', () => {
    const listing = { id: '1', title: 'Test Title', price: 100, description: 'Test Description' };
    const result = controller.addListing(listing);
    expect(result).toEqual(listing);
    expect(repo.getAllListings()).toContainEqual(listing);
  });

  test('getAllListings returns all listings', () => {
    const listing1 = { id: '1', title: 'Test Title', price: 100, description: 'Test Description' };
    const listing2 = { id: '2', title: 'Test Title', price: 100, description: 'Test Description' };
    controller.addListing(listing1);
    controller.addListing(listing2);
    expect(controller.getAllListings()).toEqual([listing1, listing2]);
  });

  test('deleteListing removes a listing by id and returns true', () => {
    const listing = { id: '1', title: 'Test Title', price: 100, description: 'Test Description' };
    controller.addListing(listing);
    expect(controller.deleteListing('1')).toBe(true);
    expect(controller.getAllListings()).toEqual([]);
  });

  test('deleteListing returns false when no listing with the given id exists', () => {
    expect(controller.deleteListing('1')).toBe(false);
  });
});