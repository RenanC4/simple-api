import request from 'supertest';
import app from '../../server';
import { Listing } from '../../src/models/Listing';

describe('Integration test: ListingController and ListingRepository with HTTP requests', () => {
  test('addListing, getAllListings and deleteListing work correctly together', async () => {
    const listing1: Listing = { id: '1', title: 'Test Title 1', price: 100, description: 'Test Description 1' };
    const listing2: Listing = { id: '2', title: 'Test Title 2', price: 200, description: 'Test Description 2' };

    // Test addListing
    await request(app).post('/listings').send(listing1).expect(201);
    await request(app).post('/listings').send(listing2).expect(201);

    // Test getAllListings
    const response = await request(app).get('/listings').expect(200);
    expect(response.body).toEqual([listing1, listing2]);

    // Test deleteListing
    await request(app).delete(`/listings/${listing1.id}`).expect(200);
    const responseAfterDelete = await request(app).get('/listings').expect(200);
    expect(responseAfterDelete.body).toEqual([listing2]);
  });
});