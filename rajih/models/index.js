const Books = [
  {
    id: 1,
    nama_buku: "kelinci kecil",
    penerbit: "susilo",
    tanggal_release: "12-12-2011",
    status: 0,
    dipinjam: 10,
  },
  {
    id: 2,
    nama_buku: "kelinci kecil",
    penerbit: "susilo",
    tanggal_release: "12-12-2011",
    status: 0,
    dipinjam: 1,
  },
  {
    id: 3,
    nama_buku: "buku ajaib",
    penerbit: "fantasia",
    tanggal_release: "01-05-2022",
    status: 1,
    dipinjam: 5,
  },
  {
    id: 4,
    nama_buku: "petualangan seru",
    penerbit: "adventure",
    tanggal_release: "03-08-2020",
    status: 1,
    dipinjam: 3,
  },
  {
    id: 5,
    nama_buku: "cerita pelajaran",
    penerbit: "education",
    tanggal_release: "10-10-2015",
    status: 0,
    dipinjam: 7,
  },
  {
    id: 6,
    nama_buku: "misteri kota hilang",
    penerbit: "enigma",
    tanggal_release: "21-02-2019",
    status: 0,
    dipinjam: 2,
  },
  {
    id: 7,
    nama_buku: "dunia kucing",
    penerbit: "petworld",
    tanggal_release: "08-06-2017",
    status: 1,
    dipinjam: 6,
  },
  {
    id: 8,
    nama_buku: "rahasia tersembunyi",
    penerbit: "mystery",
    tanggal_release: "15-09-2018",
    status: 0,
    dipinjam: 4,
  },
  {
    id: 9,
    nama_buku: "seni melukis",
    penerbit: "artistic",
    tanggal_release: "25-03-2016",
    status: 1,
    dipinjam: 8,
  },
  {
    id: 10,
    nama_buku: "dunia tumbuhan",
    penerbit: "botany",
    tanggal_release: "06-11-2020",
    status: 1,
    dipinjam: 9,
  },
];
const User = [
  {
    id: 1,
    nama: "ridho",
  },
  {
    id: 2,
    nama: "aris",
  },
  {
    id: 3,
    nama: "john",
  },
  {
    id: 4,
    nama: "jane",
  },
  {
    id: 5,
    nama: "alex",
  },
  {
    id: 6,
    nama: "susan",
  },
  {
    id: 7,
    nama: "david",
  },
  {
    id: 8,
    nama: "linda",
  },
  {
    id: 9,
    nama: "michael",
  },
  {
    id: 10,
    nama: "emily",
  },
];

const History = [
  {
    userId: 10,
    bukuId: 1,
    status: 0,
  },
  {
    userId: 1,
    bukuId: 2,
    status: 1,
  },
  {
    userId: 2,
    bukuId: 3,
    status: 0,
  },
  {
    userId: 2,
    bukuId: 4,
    status: 1,
  },
  {
    userId: 3,
    bukuId: 5,
    status: 0,
  },
  {
    userId: 3,
    bukuId: 6,
    status: 1,
  },
  {
    userId: 4,
    bukuId: 7,
    status: 0,
  },
  {
    userId: 4,
    bukuId: 8,
    status: 1,
  },
  {
    userId: 5,
    bukuId: 9,
    status: 0,
  },
  {
    userId: 5,
    bukuId: 10,
    status: 1,
  },
];

module.exports = { Books, User, History };
