# MyReads Project

# Overview
This MyReads app user can search, add and control books provided by API, the functionality of the app is simple, user can put books in 3 shelves:
- Currently Reading Shelf
- Want To Read Shelf
- Read Shelf

# How to run the app?
the project was created by create-react-app, to run it:
1. clone or download the repo in your computer
`git clone https://github.com/AkramAdil/myreads-uadcity.git`
2. install dependencies
`npm i`
3. Run the app
`npm start`

## Helpful Links:
1. [How to remove all duplicates from an array of objects?](https://stackoverflow.com/questions/2218999/how-to-remove-all-duplicates-from-an-array-of-objects/36744732#36744732)
## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

- [`getAll`](#getall)
- [`update`](#update)
- [`search`](#search)

### `getAll`

Method Signature:

```js
getAll();
```

- Returns a Promise which resolves to a JSON object containing a collection of book objects.
- This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf);
```

- book: `<Object>` containing at minimum an `id` attribute
- shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
- Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query);
```

- query: `<String>`
- Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
- These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.
