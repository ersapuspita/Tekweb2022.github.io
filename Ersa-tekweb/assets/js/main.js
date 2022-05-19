Vue.createApp({
  data() {
    return {
      Jumbotron: {
        nama: 'ErsaPuspita',
        jurusan: 'Sistem Informasi',
        image: 'https://raw.githubusercontent.com/ersapuspita/Tekweb2022.github.io/main/img/Ersa1.jpeg',
      },
      About: {
        judul: 'About Me',
        biodata: 'Nama Saya ErsaPuspita, Asal saya dari Sumatra Selatan Kota Prabumulih,Saya 3 bersaudara dan saya anak pertama',
        biodata1: 'Pendidikan saya sekarang sedang berkuliah diUniversitas Ahmad Dahlan, Jurusan Sistem Informasi, Hoby saya Menyanyi dan Mendengarkan Musik Serta menganalisis semua hal yang saya temui',
      },
      galery: {
        judul: 'My Galery',
        card1: {
          judul: 'Galery Pertama',
          image: 'https://raw.githubusercontent.com/ersapuspita/Tekweb2022.github.io/main/img/project/foto1.jpg',
          judul: 'My Photo',
          description: 'keyboard merupakan perangkat keras pada komputer atau laptop yang berfungsi sebagai alat untuk input data berupa huruf, angka, dan simbol. Fungsi keyboard laptop sangat penting karena sebagian perintah yang berupa teks dan kontrol lain dimasukkan ke dalam sistem komputer melalui keyboard.',
        },
        card2: {
          judul: 'Galery Kedua',
          image: 'https://raw.githubusercontent.com/ersapuspita/Tekweb2022.github.io/main/img/project/foto2.jpg',
          judul: 'My Photo',
          description: 'keyboard merupakan perangkat keras pada komputer atau laptop yang berfungsi sebagai alat untuk input data berupa huruf, angka, dan simbol. Fungsi keyboard laptop sangat penting karena sebagian perintah yang berupa teks dan kontrol lain dimasukkan ke dalam sistem komputer melalui keyboard.',
        },
        card3: {
          judul: 'Galery Ketiga',
          image: 'https://raw.githubusercontent.com/ersapuspita/Tekweb2022.github.io/main/img/project/foto3.jpg',
          judul: 'My Photo',
          description: 'keyboard merupakan perangkat keras pada komputer atau laptop yang berfungsi sebagai alat untuk input data berupa huruf, angka, dan simbol. Fungsi keyboard laptop sangat penting karena sebagian perintah yang berupa teks dan kontrol lain dimasukkan ke dalam sistem komputer melalui keyboard.',
        },
        card4: {
          judul: 'Galery Ke-empat',
          image: 'https://raw.githubusercontent.com/ersapuspita/Tekweb2022.github.io/main/img/project/foto4.jpg',
          judul: 'My Photo',
          description: 'keyboard merupakan perangkat keras pada komputer atau laptop yang berfungsi sebagai alat untuk input data berupa huruf, angka, dan simbol. Fungsi keyboard laptop sangat penting karena sebagian perintah yang berupa teks dan kontrol lain dimasukkan ke dalam sistem komputer melalui keyboard.',
        },
      },
    };
  },
}).mount('#app');
