Vue.createApp({
  data() {
    return {
      message: 'Hello Vue!',
      jumbotron: {},
      about: {},
      galery: [],
      judul_section: {},
    };
  },
  methods: {
    getJumbotron() {
      axios
        .get((src = '../../content/jumbotron.json'))
        .then((res) => {
          this.jumbotron = res.data;
          this.getAbout();
          this.getGalery();
          this.getJudulSection();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getAbout() {
      axios
        .get((src = '../../content/about.json'))
        .then((res) => {
          this.about = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getGalery() {
      axios
        .get((src = '../../content/galery.json'))
        .then((res) => {
          this.galery = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getJudulSection() {
      axios
        .get((src = '../../content/judul_section.json'))
        .then((res) => {
          this.judul_section = res.data;
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
