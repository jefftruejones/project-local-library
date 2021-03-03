// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let notReturned = books.filter((book) => !book.borrows[0].returned);
  return notReturned.length; //number of books currently out of stock
}

function _mostCommonInArray(info) {
  //helper function
  let newObj = {};
  for (let instance of info) {
    if (!newObj[`${instance}`]) newObj[`${instance}`] = 0; //goes through array and counts how many t
    newObj[`${instance}`]++; //each item appears
  }
  return newObj; //return the info was an object with the item as key, and number of appearances as value
}
function getMostCommonGenres(books) {
  let allGenres = books.map((book) => book.genre); //get all the genres

  let genreCount = _mostCommonInArray(allGenres);

  const genreArray = Object.entries(genreCount).sort(
    //create array of genres ordered from most to least
    (genreA, genreB) => genreB[1] - genreA[1]
  );

  const finalArray = genreArray.map((genre) => {
    return { name: `${genre[0]}`, count: genre[1] }; //turn array into array of objects
  });
  return finalArray.slice(0, 5); //return top 5 entries
}

function getMostPopularBooks(books) {
  let mostPopular = books.map((book) => {
    return { name: `${book.title}`, count: book.borrows.length };
  }); //make an array of objects containing book title and how oftwn checked out

  mostPopular.sort((bookA, bookB) => bookB.count - bookA.count); //sort it
  return mostPopular.slice(0, 5); //return the top 5 results
}

function getMostPopularAuthors(books, authors) {
  let mostPopular = authors.map((author) => {
    let {
      name: { first, last },
    } = author;
    let val = [];
    for (book of books) {
      if (book.authorId === author.id) {
        //find how often each book is checked out
        val.push(book.borrows.length);
      }
    }
    val = val.reduce((acc, book) => acc + book); //add up total amount of times book is checked out
    return { name: `${first} ${last}`, count: val }; //add author and count object to array
  });

  mostPopular.sort((authorA, authorB) => authorB.count - authorA.count);
  return mostPopular.slice(0, 5); //return top 5 most popular authors
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
