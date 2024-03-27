   // Verifica se a página foi recarregada após clicar em "Registrar"
   if (performance.navigation.type == 1) {
    // Se sim, mostra a tela de registro
    document.getElementById("login-container").style.display = "none";
    document.getElementById("register-container").style.display = "block";
}

// Adicionando um evento de clique ao link "Registrar"
document.getElementById("register-link").addEventListener("click", function(event) {
    // Evita que o link execute sua ação padrão (navegar para outra página)
    event.preventDefault();
    // Recarrega a página
    window.location.reload();
});

//<a href="pagina_de_registro.html" id="register-link">Registrar</a>


<div id="social-container">
<p>Ou entre pelas suas redes sociais</p>
<i class="fa-brands fa-facebook-f"></i>
<i class="fa-brands fa-linkedin"></i>
<i class="fa-brands fa-whatsapp"></i>
</div>