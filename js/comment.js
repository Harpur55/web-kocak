
  const firebaseConfig = {
    apiKey: "AIzaSyBmB9NmSnBw15G4n9sLeUJZ5NJrWq0KgQw",
    authDomain: "funny-website-4b19b.firebaseapp.com",
    databaseURL: "https://funny-website-4b19b-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "funny-website-4b19b",
    storageBucket: "funny-website-4b19b.firebasestorage.app",
    messagingSenderId: "1083608674104",
    appId: "1:1083608674104:web:e7a2226b5d4b670689dbcd"
  };

  firebase.initializeApp(firebaseConfig);
  const db = firebase.database();

  const input = document.getElementById("inputKomentar");
  const namaInput = document.getElementById("namaUser");
  const list = document.getElementById("listKomentar");

  // ambil nama dari localStorage
  if (localStorage.getItem("namaUser")) {
    namaInput.value = localStorage.getItem("namaUser");
  }

  // simpan nama otomatis
  namaInput.addEventListener("input", () => {
    localStorage.setItem("namaUser", namaInput.value);
  });

  function kirimKomentar() {
    const teks = input.value.trim();
    const nama = namaInput.value.trim();

    if (!nama || !teks) {
      alert("Nama dan komentar wajib diisi!");
      return;
    }

    db.ref("komentar").push({
      nama: nama,
      isi: teks,
      waktu: new Date().toLocaleString()
    });

    input.value = "";
  }

  // realtime tampil
  db.ref("komentar").on("value", snapshot => {
    list.innerHTML = "";

    const data = snapshot.val();
    if (!data) return; // 🔥 biar tidak error kalau kosong

    for (let id in data) {
      const item = data[id];

      const div = document.createElement("div");
      div.className = "item-komentar";

      div.innerHTML = `
        <div class="nama">${item.nama || "Anonim"}</div>
        <div class="waktu">${item.waktu}</div>
        <div>${item.isi}</div>
      `;

      list.prepend(div);
    }
  });
