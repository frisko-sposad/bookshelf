const main = document.getElementById('main-container');
const btnAddBookForm = document.getElementById('btn-add-book');
const h1 = document.getElementById('h1');
const error = document.getElementById('error');
const container = document.querySelector('.container');

// show bookshelf
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
      <button class="book__btn-edit btn" data-id="${bookNumber}">Редактировать</button>
      <button class="book__btn-remove btn" data-id="${bookNumber}">Удалить</button>
    </div>
  </div>`;
}

function showBookShelf() {
  main.innerHTML = '';
  for (let i = 0; i < books.length; i++) {
    createBook(i);
  }
}

showBookShelf();

// show the bookshelf when you click on the title h1
h1.addEventListener('click', () => {
  showBookShelf();
});

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
      <button id="btn-cancel" class="btn-cancel btn">Отменить</button>
      <button id="add-book" class="btn-add-book btn">Сохранить</button>
    </div>
  </div>`;
}


btnAddBookForm.addEventListener('click', () => {
  addBookForm();
});

// create a new book
document.addEventListener('click', (e) => {  
  if (e.target && e.target.id == 'add-book') {
    if (Number(document.getElementById('year').value) > 0 && Number(document.getElementById('year').value) <= 2017) {
      books[books.length] = {
        name: document.getElementById('name').value.toString(), 
        autor: document.getElementById('autor').value.toString(),
        year: document.getElementById('year').value.toString(),
        image: document.getElementById('cover').value.toString(),
      };
      showBookShelf();
      error.innerHTML = '';
    } else {
      error.innerHTML = `Введить правильный год! Не более 2017.`;      
    }
  }
});


// Delete book
container.addEventListener('click', (e) => {
  if (e.target.classList.contains('book__btn-remove')) {
    console.log(e.path[0].dataset.id); 
    books.splice(e.path[0].dataset.id,1);
    showBookShelf();
  };
});


// Edit book
function editBook(bookNumber) {
  main.innerHTML = `
  <div class="form" action="">
    <div class="subtitle-container">
      <h2 class="h2">Редактирование книги</h2>
    </div>    
    <div class="form__text">
      <p class="book__text">Название книги</p>
      <input id="name" class="text_vaid" type="text" placeholder="Название книги" value="${books[bookNumber]['name']}" >
    </div>
    <div class="form__text">
      <p class="book__text">Автор</p>
      <input id="autor" class="text_vaid" type="text" placeholder="Автор" value="${books[bookNumber]['autor']}">
    </div>
    <div class="form__text">
      <p class="book__text">Год выпуска</p>
      <input id="year" class="text_vaid" type="text" placeholder="Год выпуска" value="${books[bookNumber]['year']}" pattern="^[a-zA-Zа-яА-Я]+$">
      </div>
    <div class="form__text">
      <p class="book__text">Обложка</p>
      <input id="cover" class="text_vaid" type="text" placeholder="вставьте ссылку на картинку обложку" value="${books[bookNumber]['image']}">
    </div>    
    <div class="form__btn-container">          
      <button id="btn-cancel" class="btn-cancel btn">Отменить</button>
      <button id="edit-book" class="btn-edit-book btn" data-id="${bookNumber}">Сохранить</button>
    </div>
  </div>`;
}

container.addEventListener('click', (e) => {
  if (e.target.classList.contains('book__btn-edit')) {    
    editBook(e.path[0].dataset.id);
  }
});

// cancel button
document.addEventListener('click', (e) => {
  if(e.target && e.target.id == 'btn-cancel') {
    showBookShelf();    
  }
});


// save new data
document.addEventListener('click', (e) => {
  if(e.target && e.target.id == 'edit-book') {
    if (Number(document.getElementById('year').value) > 0 && Number(document.getElementById('year').value) <= 2017) {
    books[e.path[0].dataset.id] = {
      name: document.getElementById('name').value.toString(), 
      autor: document.getElementById('autor').value.toString(),
      year: document.getElementById('year').value.toString(),
      image: document.getElementById('cover').value.toString(),
    };
    showBookShelf();
    error.innerHTML = '';
  } else {
    error.innerHTML = `Введить правильный год! Не более 2017.`;      
  }
}
});


