// Menu mobile
document.querySelector('.menu-toggle').addEventListener('click', () => {
  document.querySelector('.nav ul').classList.toggle('active');
});

// Envio do formulário (simulação)
document.querySelector('.form-denuncia').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Denúncia enviada com sucesso! Sua identidade está protegida.');
  e.target.reset();
});
