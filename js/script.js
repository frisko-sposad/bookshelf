const main = document.getElementById('main-container');
const btnAddBookForm = document.getElementById('btn-add-book');
const btnAddBook = document.getElementById('add-book');

// show all books on the bookshelf
function createBook(bookNumber) {
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

function createBookShelf() {
  main.innerHTML = '';
  for (let i = 0; i < books.length; i++) {
    createBook(i);  
  }
}

createBookShelf();

// form for adding a new book
function addBookForm() {
  main.innerHTML = `
  <div class="form" action="">
    <div class="subtitle-container">
      <h2 class="h2">Добавление новой книги</h2>
    </div>    
    <div class="form__text">
      <p class="book__text">Название книги</p>
      <input id="name" class="text_vaid" type="text" placeholder="Название книги" >
    </div>
    <div class="form__text">
      <p class="book__text">Автор</p>
      <input id="autor" class="text_vaid" type="text" placeholder="Автор" pattern="^[a-zA-Zа-яА-Я]+$">
    </div>
    <div class="form__text">
      <p class="book__text">Год выпуска</p>
      <input id="year" class="text_vaid" type="text" placeholder="Год выпуска">
      </div>
    <div class="form__text">
      <p class="book__text">Обложка</p>
      <input id="cover" class="text_vaid" type="text" placeholder="вставьте ссылку на картинку обложку">
    </div>    
    <div class="form__btn-container">    
      <button id="add-book" class="btn-add-book btn">Сохранить</button>
    </div>
  </div>`
}


btnAddBookForm.addEventListener('click', () => {  
  addBookForm();
})

// create a new book
document.addEventListener('click',function(e){
  if(e.target && e.target.id== 'add-book'){
    books[books.length] = {
      name: document.getElementById('name').value.toString(), 
      autor: document.getElementById('autor').value.toString(),
      year: document.getElementById('year').value.toString(),
      image: document.getElementById('cover').value.toString(),
    }
    createBookShelf();
   }
});

