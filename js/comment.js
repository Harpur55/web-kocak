


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
  const list = document.getElementById("listKomentar");

  function kirimKomentar() {
    const teks = input.value.trim();

    if (!teks) {
      alert("Komentar kosong!");
      return;
    }

    db.ref("komentar").push({
      isi: teks,
      waktu: new Date().toLocaleString()
    });

    input.value = "";
  }

  db.ref("komentar").on("value", snapshot => {
    list.innerHTML = "";
    const data = snapshot.val();

    for (let id in data) {
      const item = data[id];

      const div = document.createElement("div");
      div.className = "item-komentar";
      div.innerHTML = `<b>${item.waktu}</b><br>${item.isi}`;

      list.prepend(div);
    }
  });
