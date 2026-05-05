
function kirimKomentar() {
  const input = document.getElementById("inputKomentar");
  const list = document.getElementById("listKomentar");

  const teks = input.value.trim();

  if (teks === "") {
    alert("Komentar tidak boleh kosong!");
    return;
  }

  const komentarBaru = document.createElement("div");
  komentarBaru.classList.add("item-komentar");
  komentarBaru.innerText = teks;

  list.prepend(komentarBaru);

  input.value = "";

  alert("Terima kasih atas komentarnya!");
}
