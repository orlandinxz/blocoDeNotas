// /script.js
document.addEventListener('DOMContentLoaded', () => {
  const blocoDeNotas = document.getElementById('blocoDeNotas');
  const contadorCaracteres = document.getElementById('contadorCaracteres');
  const btnLimpar = document.getElementById('btnLimpar');
  const storageKey = 'minhaNota';

  function atualizarContador() {
    const total = blocoDeNotas.value.length;
    contadorCaracteres.textContent = `${total} caractere${total === 1 ? '' : 's'}`;
  }

  function salvarNota() {
    localStorage.setItem(storageKey, blocoDeNotas.value);
    atualizarContador();
  }

  function carregarNota() {
    const notaSalva = localStorage.getItem(storageKey);

    if (notaSalva !== null) {
      blocoDeNotas.value = notaSalva;
    }

    atualizarContador();
  }

  function limparNota() {
    const confirmou = window.confirm('Tem certeza que deseja apagar toda a nota?');

    if (!confirmou) {
      return;
    }

    blocoDeNotas.value = '';
    localStorage.removeItem(storageKey);
    atualizarContador();
    blocoDeNotas.focus();
  }

  blocoDeNotas.addEventListener('input', salvarNota);
  btnLimpar.addEventListener('click', limparNota);

  carregarNota();
});