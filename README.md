## Daftar Isi
- [Struktur Folder](#struktur-folder)
- [Konfiguras Aplikasi](#konfigurasi-aplikasi)
- [Penggunaan Aplikasi](#penggunaan-aplikasi)



## Struktur Folder

- `app`: Direktori yang berisi kode aplikasi.
  - `controllers`: Direktori yang berisi kontroler Express.
  - `models`: Direktori yang berisi definisi model Sequelize.
  - `repositories`: Direktori yang berisi repository yang digunakan untuk mengakses database.
  - `routes`: Direktori yang berisi definisi rute Express.
  - `services`: Direktori yang berisi logika bisnis.
  - `utils`: Direktori yang berisi utilitas yang digunakan dalam aplikasi.
- `config`: Direktori yang berisi konfigurasi aplikasi.
  - `config.js`: Berkas yang berisi konfigurasi umum.
  - `db.js`: Berkas yang berisi konfigurasi koneksi database.
  - `server.js`: Berkas yang berisi konfigurasi server HTTP.
- `migrations`: Direktori yang berisi definisi migrasi database Sequelize.
- `node_modules`: Direktori yang berisi dependensi Node.js.
- `test`: Direktori yang berisi file tes.
- `.env`: Berkas yang berisi variabel lingkungan aplikasi.
- `.gitignore`: Berkas yang berisi daftar file dan direktori yang diabaikan oleh Git.
- `package.json`: Berkas konfigurasi proyek Node.js.
- `README.md`: Berkas yang berisi deskripsi proyek dan dokumentasi.

## Konfigurasi Aplikasi

Konfigurasi aplikasi dapat ditemukan pada direktori `config`. Berkas `config.js` berisi konfigurasi umum seperti port aplikasi, sedangkan `db.js` berisi konfigurasi koneksi database. Berkas `server.js` berisi konfigurasi server HTTP, seperti middleware dan definisi rute.

## Penggunaan Aplikasi

Sebelum menjalankan aplikasi, pastikan Anda telah mengatur variabel lingkungan yang dibutuhkan pada berkasa `.env`. Kemudian, Anda dapat menjalankan aplikasi dengan menjalankan perintah `npm start`. Aplikasi akan berjalan pada port yang telah ditentukan pada file `config.js`.

Untuk menguji aplikasi, Anda dapat menjalankan perintah `npm test`. Aplikasi akan diuji menggunakan file tes yang terdapat pada direktori `test`.

## Dokumentasi API
https://documenter.getpostman.com/view/20046004/2s93shz9bv
