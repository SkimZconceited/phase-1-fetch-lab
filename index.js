function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch('https://anapioficeandfire.com/api/books').then(res => res.json()).then(json => renderBooks(json));
  // fetch('https://anapioficeandfire.com/api/books').then(res => res.json()).then(data => console.log(renderBooks()));
  // fetch('https://anapioficeandfire.com/api/books').then(res => res.json()).then(data => console.log(renderBooks));
  // console.log(renderBooks(data));
  // console.log('Inside fetchBooks()');
  // console.log(renderBooks);
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
