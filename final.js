Vue.createApp({
  data() {
    return {
      message: 'Hello Vue!',
      jumbotron: {},
      about: {},
      galery: [],
      judul_section: {},
      article: [],
    };
  },
  methods: {
    getJumbotron() {
      axios
        .get((src = './content/jumbotron.json'))
        .then((res) => {
          this.jumbotron = res.data;
          this.getAbout();
          this.getGalery();
          this.getJudulSection();
          this.getArticle();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getAbout() {
      axios
        .get((src = './content/about.json'))
        .then((res) => {
          this.about = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getGalery() {
      axios
        .get((src = './content/galery.json'))
        .then((res) => {
          this.galery = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getJudulSection() {
      axios
        .get((src = './content/judul_section.json'))
        .then((res) => {
          this.judul_section = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getArticle() {
      axios
        .get((src = './content/article.json'))
        .then((res) => {
          this.article = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  beforeMount() {
    this.getJumbotron();
  },
}).mount('#app');
