function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  fetch('https://anapioficeandfire.com/api/books').then(res => res.json()).then(json => renderBooks(json));
  // fetch('https://anapioficeandfire.com/api/books').then(res => res.json()).then(data => console.log(renderBooks()));
  return fetch('https://anapioficeandfire.com/api/books').then(res => res.json()).then(json => render5th(json));
  // console.log(renderBooks(data));
  // console.log('Inside fetchBooks()');
  // console.log(renderBooks);
}


// This does all the extra work in the assignment page: 
// LOGs books in the specific indexx position
// after it gets the value of the character stored in that position which happens to be another api of itself we then use fetch to access it and collect the wanted data

function render5th(books) {
  console.log(books);
  console.log(books[4]);
  console.log(books[4].characters[1030])
  const linkChar = books[4].characters[1030]
  fetch(linkChar).then(res => res.json()).then(json => console.log(`This is the 1031 character: ${json.name}`));

  books.forEach(book => {
    console.log(`The number of pages of each book is: ${book.numberOfPages} of the book: ${book.name}`)
  });

}

function renderBooks(books) {
  const main = document.querySelector('main');
  let n = 0;
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
    // console.log(h2, ` ${n++}`);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
