
const routes = [
  {
    path: '/',
    url: './index.html',
  },
  {
    path: '/home/',
    componentUrl: './pages/home.html',
  },
  {
    path: '/word_books/new',
    componentUrl: './pages/word_books/new.html',
  },
  {
    path: '/word_books/:objectId',
    componentUrl: './pages/word_books/show.html',
  },
  {
    path: '/word_books/:objectId/training',
    componentUrl: './pages/word_books/training.html',
  },
  {
    path: '/word_books/:objectId/words/new',
    componentUrl: './pages/words/new.html',
  },
  {
    path: '/word_books/:objectId/words/:wordId/edit',
    componentUrl: './pages/words/edit.html',
  },
];
