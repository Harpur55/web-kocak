
  const input = document.getElementById("inputKomentar");
  const list = document.getElementById("listKomentar");

  // ambil data dari localStorage saat pertama load
  document.addEventListener("DOMContentLoaded", tampilkanKomentar);

  function kirimKomentar() {
    const teks = input.value.trim();

    if (!teks) {
      alert("Komentar tidak boleh kosong!");
      return;
    }

    // ambil data lama
    let komentar = JSON.parse(localStorage.getItem("komentar")) || [];

    // tambah komentar baru (di depan)
    komentar.unshift(teks);

    // simpan lagi
    localStorage.setItem("komentar", JSON.stringify(komentar));

    // tampilkan ulang
    tampilkanKomentar();

    // reset input
    input.value = "";
  }

  function tampilkanKomentar() {
    const data = JSON.parse(localStorage.getItem("komentar")) || [];

    list.innerHTML = ""; // kosongkan dulu

    data.forEach(teks => {
      const div = document.createElement("div");
      div.className = "item-komentar";
      div.textContent = teks;
      list.appendChild(div);
    });
  }
