function toggleTheme() {
  const body = document.body;
  const isLight = body.classList.toggle("light-mode");

  // Salva a preferência no localStorage
  localStorage.setItem("theme", isLight ? "light" : "dark");

  // Atualiza o texto do botão (se houver)
  const themeBtn = document.getElementById("theme-toggle");
  if (themeBtn) {
    themeBtn.textContent = isLight ? "Modo Escuro" : "Modo Claro";
  }
}

// Aplica o tema salvo ao carregar a página
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    document.body.classList.add("light-mode");
    const themeBtn = document.getElementById("theme-toggle");
    if (themeBtn) {
      themeBtn.textContent = "Modo Escuro";
    }
  }
});