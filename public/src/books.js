// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function findAuthorById(authors, id) {
  let authorObj = authors.find((author) => author.id === id); //find specific book by author
  return authorObj;
}

function findBookById(books, id) {
  let bookOBJ = books.find((book) => book.id === id); //find specific book from list by id
  return bookOBJ;
}

function partitionBooksByBorrowedStatus(books) {
  let notReturned = books.filter((book) => !book.borrows[0].returned); //array of books checked out
  let haveReturned = books.filter((book) => book.borrows[0].returned); //array of books currently in stock
  let allBooks = [notReturned, haveReturned];
  return allBooks; //final array of book in and out of stock
}

function getBorrowersForBook(book, accounts) {
  let sliceOfBorrows = book.borrows.slice(0, 10); //get first 10 of book borrow history
  let finalArray = sliceOfBorrows.map((history) => {
    let val = accounts.find((account) => account.id === history.id); //find account that matches
    return { ...history, ...val }; //put account and book borrow history together
  });
  return finalArray; //return array of book borrow history and account info that goes with it
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
