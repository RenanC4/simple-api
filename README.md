# Sierra Listing CRuD API


## Installation

First, clone the repository:

```bash
git clone https://github.com/RenanC4/listing-api-sierra.git
```

Then, install the dependencies:
```bash
cd listing-api-sierra
npm install
```

Running
To start the server, run:

```bash 
npm start
```

The server will be available at http://localhost:3000.

Testing
This project includes both unit and integration tests. To run the tests, use the following commands:

For unit tests:

```bash
npm test:unit
```
For integration tests:

```bash
npm test:integration
```

API
The API has the following endpoints:

POST /listings: Adds a new listing. The request body should be a JSON object representing the listing.

GET /listings: Gets all listings.

DELETE /listings/:id: Deletes the listing with the specified ID.

To check it in the Swagger chekcout to http://localhost:3000/api-docs in your favorite browser


License
MIT

This project achieves the exercise requirements as follows:

- Setup: The project is initialized with a package.json file, which is created by running npm init -y. The necessary packages, including typescript, express, and @types/express, are installed using npm install. TypeScript is set up for the project with a tsconfig.json file, which is created by running tsc --init.

- Data Model:
 The project defines a TypeScript interface for a real estate listing, named Listing. This interface includes properties for id (a unique identifier for the listing), title (the title of the real estate listing), price (the price of the listing), and description (a brief description of the listing).

- API Endpoints:
  - Add a New Listing: The project includes a POST endpoint at /listings that allows users to add a new listing. This endpoint accepts JSON data matching the Listing interface and adds it to an in-memory store (an array in this case).

  - Retrieve All Listings: The project includes a GET endpoint at /listings that retrieves all current listings from the in-memory store.

  - Delete a Listing: The project includes a DELETE endpoint at /listings/:id, where :id is the unique identifier of the listing to be deleted. This endpoint removes the specified listing from the in-memory store.


In addition to these, the project also follows several best practices and design patterns like the Repository Pattern, Dependency Injection, and Segregation of Concerns that will be described below. It also uses middleware for handling HTTP requests and responses, and uses Promises and the async/await syntax for handling asynchronous operations. The project is documented with a detailed README file and uses Swagger for API documentation.


# Patterns and Best Practices Used

- Repository Pattern

The Repository Pattern is a design pattern that abstracts data access details so that we can isolate business logic from the underlying data infrastructure. In this project, ListingRepository is an implementation of the Repository Pattern.

- Dependency Injection

Dependency Injection is a design pattern that helps achieve inversion of control between classes and their dependencies. In the constructor of ListingController, the ListingRepository dependency is injected. This facilitates unit testing and code reuse.

- Segregation of Concerns and Single Responsability Priciple

 The project follows the single responsibility principle, where each module or class has responsibility over a single part of the functionality provided by the software. For example, ListingController is responsible for handling business logic, while ListingRepository is responsible for interacting with the database.

- Unit and Integration Testing

Unit and integration tests are recommended practices to ensure that the code works as expected and to prevent regressions. Unit tests test individual parts of the code in isolation (like functions or methods), while integration tests test how different parts of the system work together.

- Use of Promises and Async/Await

The project uses Promises and the async/await syntax to handle asynchronous operations. This makes the code more readable and easier to understand, compared to using callbacks.

- Use of Middlewares

 The project uses middleware to handle HTTP requests and responses. This allows for a clear separation between routing logic and business logic.

- Documentation

Documentation is an essential part of any project. This project includes a detailed README file that provides information on how to install, run, and test the project.

- Swagger for API Documentation

This project uses Swagger for API documentation. Swagger provides a set of tools for designing, building, and documenting RESTful APIs. It allows anyone — be it your development team or your end consumers — to visualize and interact with the API’s resources without having any of the implementation logic in place. This makes understanding and using your API easier. It also helps in maintaining consistency and standardization as your API evolves.
