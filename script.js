// Ambil parameter "to" dari URL
const urlParams = new URLSearchParams(window.location.search);
const guestName = urlParams.get("to");

// Tampilkan nama tamu jika ada
if (guestName) {
  document.getElementById("guest-name").textContent = guestName;
}
