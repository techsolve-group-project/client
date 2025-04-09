function formatDate(isoString) {
  // Buat objek Date dari string input
  const date = new Date(isoString);
  if (isNaN(date.getTime())) {
    return 'Once upon a time...';
  }

  // Tambahkan offset UTC+7 (7 jam dalam milidetik)
  const offsetInMilliseconds = 7 * 60 * 60 * 1000;
  const adjustedDate = new Date(date.getTime() + offsetInMilliseconds);

  // Daftar nama bulan (dalam bahasa Inggris)
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  // Ambil informasi tanggal dari waktu yang telah disesuaikan
  const month = monthNames[adjustedDate.getUTCMonth()];
  const day = adjustedDate.getUTCDate();
  const year = adjustedDate.getUTCFullYear();

  // Ambil jam dan menit
  const hours = adjustedDate.getUTCHours().toString().padStart(2, '0');
  const minutes = adjustedDate.getUTCMinutes().toString().padStart(2, '0');

  // Format output seperti "April 8, 2024, 20:43"
  return `${month} ${day}, ${year}, ${hours}:${minutes}`;
}

export default formatDate;
