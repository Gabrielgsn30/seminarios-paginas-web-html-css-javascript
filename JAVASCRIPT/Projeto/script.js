const toggle = document.getElementById("temaToggle");

toggle.addEventListener("change", function () {
  document.body.className = this.checked ? "escuro" : "claro";
});
