const $$ = Dom7;

const app = new Framework7({
  root: '#app', // App root element
  name: 'framework7-core-tab-view', // App name
  theme: 'auto', // Automatic theme detection

  // App root methods
  methods: {
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
