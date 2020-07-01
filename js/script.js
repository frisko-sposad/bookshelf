const main = document.getElementById('main-container');

function createBookShelf(bookNumber) {
  main.innerHTML += `
  <div class="book">
        <div class="book-container">
          <img class="book__img" src='${books[bookNumber]['image']}' alt="">
          <div class="book__info-container">
            <div class="book__name book__text">${books[bookNumber]['name']}</div>
            <div class="book__autor book__text">${books[bookNumber]['autor']}</div>
            <div class="book__year book__text">${books[bookNumber]['year']}</div>
          </div>
        </div>
        <div class="book__btn-container">
          <button class="book__btn-edit btn">Редактировать</button>
          <button class="book__btn-remove btn">Удалить</button>
        </div>
      </div>`
}
for (let i = 0; i < books.length; i++) {
  createBookShelf(i);
  
}
