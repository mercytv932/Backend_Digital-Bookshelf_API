# Digital Bookshelf API

This project is an Express API for managing a digital bookshelf. It allows users to create, read, update, and delete books in a MongoDB database using Mongoose.

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Change into the project directory:

   ```bash
   cd digital-bookshelf-api
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

## Environment Variables

This project uses environment variables. Create a `.env` file in the project root before starting the server.

```env
MONGO_URI=mongodb+srv://<username>:<password>@<cluster-url>/<database-name>?retryWrites=true&w=majority
PORT=5000
```

### Required variables

- `MONGO_URI`: MongoDB connection string used by Mongoose to connect to the database.
- `PORT`: Optional port for the Express server. If it is not set, the app falls back to `5000`.

> Do not commit your `.env` file to GitHub. Store your real database connection details locally only.

## Running the Application

This project does not include a `dev` script in `package.json`, so start the app with:

```bash
node server.js
```

The server starts on port `5000` by default, or on the `PORT` value from the environment if it is provided.

Local URL:

```text
http://localhost:5000
```

## Testing / Usage

You can test the API manually with Postman or with `curl` requests.

### API endpoints

- `GET /api/books`
  - Get all books in the database.
- `POST /api/books`
  - Create a new book.
- `GET /api/books/:id`
  - Get a single book by ID.
- `PUT /api/books/:id`
  - Update a book by ID.
- `DELETE /api/books/:id`
  - Delete a book by ID.

### Example requests

#### Get all books

```bash
curl http://localhost:5000/api/books
```

#### Create a book

```bash
curl -X POST http://localhost:5000/api/books \
  -H "Content-Type: application/json" \
  -d '{
    "title": "The Hobbit",
    "author": "J.R.R. Tolkien",
    "isbn": "9780547928227",
    "inStock": true,
    "publishedDate": "1937-09-21"
  }'
```

#### Get one book by ID

```bash
curl http://localhost:5000/api/books/<book-id>
```

#### Update a book by ID

```bash
curl -X PUT http://localhost:5000/api/books/<book-id> \
  -H "Content-Type: application/json" \
  -d '{
    "title": "The Hobbit",
    "author": "J.R.R. Tolkien",
    "inStock": false
  }'
```

#### Delete a book by ID

```bash
curl -X DELETE http://localhost:5000/api/books/<book-id>
```

### Using Postman

1. Open Postman.
2. Create a new request.
3. Set the method to `GET`, `POST`, `PUT`, or `DELETE`.
4. Enter a URL such as:
   - `http://localhost:5000/api/books`
   - `http://localhost:5000/api/books/<book-id>`
5. If needed, add a JSON body in the request body tab.
6. Click `Send` to view the API response.

## Important Notes

- This project requires a MongoDB database connection. You can use MongoDB Atlas or a local MongoDB instance.
- The database URL must be stored in the `MONGO_URI` environment variable.
- The application uses `dotenv` to load environment variables from the `.env` file.
- The server will run on port `5000` unless `PORT` is set in the environment.
- This project does not include a frontend; it is a backend API used to manage book records.
