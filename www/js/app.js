const ncmb = new NCMB(applicationKey, clientKey);

const $$ = Dom7;

const app = new Framework7({
  root: '#app', // App root element
  name: 'framework7-core-tab-view', // App name
  theme: 'auto', // Automatic theme detection

  // App root data
  data: function () {
    return {
      ncmb: ncmb
    }
  },
  // App root methods
  methods: {
    loadImage: async function(file) {
      return new Promise((res, rej) => {
        const fr = new FileReader;
        fr.onload = (result) => {
          res(fr.result);
        }
        fr.readAsDataURL(file);
      });
    },
    updateWordCount: async function(wordBook) {
      const Word = ncmb.DataStore('Word');
      const words = await Word
        .relatedTo(wordBook, 'words')
        .equalTo('remember', false)
        .count()
        .fetchAll();
      await wordBook
        .set('words_count', words.count)
        .update();
    },
    getWords: async function(wordBook) {
      const words = wordBook.words;
      if (words == null) {
        return [];
      }
      return words;
    }
  },
  // App routes
  routes: routes,
});
