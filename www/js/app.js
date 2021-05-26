const applicationKey = '1f394bd4d2a0a80a45f0c5a86fea448b6b36d5a795ad2ce90ddb6ff7ad136fb2';
const clientKey = 'cdc44afd241a213a917f35d58344672ad60e72666bbbd7aa44c82172ea4fa398';
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
      const Word = ncmb.DataStore('Word');
      return await Word
        .relatedTo(wordBook, 'words')
        .equalTo('remember', false)
        .limit(1000)
        .fetchAll();
    }
  },
  // App routes
  routes: routes,
});
