// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function findAccountById(accounts, id) {
  let accObj = accounts.find((account) => account.id === id);
  return accObj;
}

function sortAccountsByLastName(accounts) {
  accounts.sort((accountA, accountB) =>
    accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1
  );
  return accounts; //returns account in alphabetical order
}

function getTotalNumberOfBorrows(account, books) {
  /* let counter = 0;
  for (book of books) {
    for (index of book.borrows) {
      console.log(index);
      if (index.id === account.id) {
        counter++;
      }
    }
  }
  return counter;*/ //this was my original code - i collaborated with a teammate
  //who came up with the solution below. I included my original code to remember how
  //I did it.

  let filtered = books.filter(
    (
      book //count how many times an account has borrowed a book
    ) => book.borrows.find((borrow) => borrow.id === account.id) //
  );
  return filtered.length;
}

function getBooksPossessedByAccount(account, books, authors) {
  let filtered = books.filter((book) =>
    book.borrows.find(
      (borrow) => borrow.id === account.id && borrow.returned === false
    )
  ); //array of books possessed by account

  let accumulator = [];
  const result = filtered.reduce((acc, book) => {
    let auth = authors.find((author) => book.authorId === author.id); //find author info for each book
    let { id, title, genre, authorId, borrows } = book;
    let newObj = {
      id: `${id}`,
      title: `${title}`,
      genre: `${genre}`,
      authorId: `${authorId}`,
      author: auth,
      borrows: borrows,
    };
    acc.push(newObj);
    console.log(acc);
    return acc;
  }, accumulator);

  return result; //return array of book objects with author info included
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
