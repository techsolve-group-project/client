function formatDate(isoString) {
  // Buat objek Date dari string input
  const date = new Date(isoString);
  if (isNaN(date.getTime())) {
    return 'Once upon a time...';
  }

  // Daftar nama bulan (dalam bahasa Inggris)
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  // Ambil informasi tanggal
  const month = monthNames[date.getUTCMonth()];
  const day = date.getUTCDate();
  const year = date.getUTCFullYear();

  // Ambil jam dan menit (menggunakan waktu UTC sesuai input)
  const hours = date.getUTCHours().toString().padStart(2, '0');
  const minutes = date.getUTCMinutes().toString().padStart(2, '0');

  // Buat format output seperti "April 8, 2024, 13:43"
  return `${month} ${day}, ${year}, ${hours}:${minutes}`;
}

export default formatDate;
