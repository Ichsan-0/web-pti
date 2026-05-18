const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// View engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(expressLayouts);
app.set('layout', 'layouts/main');

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.render('index', {
    title: 'Fakultas Tarbiyah dan Keguruan – UIN Ar-Raniry',
    description: 'Menyiapkan pendidik profesional yang islami, modern, dan berdaya saing global.'
  });
});

// Tentang FTK
app.get('/tentang/sambutan', (req, res) => {
  res.render('tentang/sambutan', {
    title: 'Sambutan Dekan – FTK UIN Ar-Raniry',
    description: 'Pesan dan harapan dari Dekan Fakultas Tarbiyah dan Keguruan UIN Ar-Raniry Banda Aceh.'
  });
});

app.get('/tentang/sejarah', (req, res) => {
  res.render('tentang/sejarah', {
    title: 'Sejarah & Profil – FTK UIN Ar-Raniry',
    description: 'Perjalanan panjang Fakultas Tarbiyah dan Keguruan sejak berdiri hingga menjadi pusat pendidikan Islam terkemuka.'
  });
});

app.get('/tentang/visi-misi', (req, res) => {
  res.render('tentang/visi-misi', {
    title: 'Visi & Misi – FTK UIN Ar-Raniry',
    description: 'Visi, misi, tujuan, dan nilai-nilai Fakultas Tarbiyah dan Keguruan UIN Ar-Raniry.'
  });
});

app.get('/tentang/pimpinan', (req, res) => {
  res.render('tentang/pimpinan', {
    title: 'Pimpinan Dekanat – FTK UIN Ar-Raniry',
    description: 'Jajaran pimpinan Fakultas Tarbiyah dan Keguruan UIN Ar-Raniry Banda Aceh.'
  });
});

app.get('/tentang/struktur', (req, res) => {
  res.render('tentang/struktur', {
    title: 'Struktur Organisasi – FTK UIN Ar-Raniry',
    description: 'Bagan dan susunan organisasi Fakultas Tarbiyah dan Keguruan UIN Ar-Raniry.'
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
