import { DuplicateIdError } from '../../../src/errors/DuplicatedError';
import { ListingRepository } from '../../../src/respositories/ListingRepository';

describe('ListingRepository', () => {
  let repo: ListingRepository;

  beforeEach(() => {
    repo = new ListingRepository();
  });

  test('addListing adds a listing', () => {
    const listing = { id: '1', title: 'Test Title', price: 100, description: 'Test Description' };
    repo.addListing(listing);
    expect(repo.getAllListings()).toContainEqual(listing);
  });

 
  test('addListing throws an error when a listing with the same id is added', () => {
    const listing = { id: '1', title: 'Test Title', price: 100, description: 'Test Description' };
    repo.addListing(listing);
    expect(() => repo.addListing(listing)).toThrow(DuplicateIdError);
  });

  test('getAllListings returns all listings', () => {
    const listing1 = { id: '1', title: 'Test Title', price: 100, description: 'Test Description' };
    const listing2 = { id: '2', title: 'Test Title', price: 100, description: 'Test Description' };
    repo.addListing(listing1);
    repo.addListing(listing2);
    expect(repo.getAllListings()).toEqual([listing1, listing2]);
  });

  test('deleteListing removes a listing by id', () => {
    const listing = { id: '1', title: 'Test Title', price: 100, description: 'Test Description' };
    repo.addListing(listing);
    repo.deleteListing('1');
    expect(repo.getAllListings()).toEqual([]);
  });

  test('deleteListing returns null when no listing with the given id exists', () => {
    expect(repo.deleteListing('1')).toBeNull();
  });
});