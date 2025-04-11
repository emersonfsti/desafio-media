const form = document.getElementById('form-media');
const resultado = document.getElementById('resultado');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const nota3 = parseFloat(document.getElementById('nota3').value);
    const nota4 = parseFloat(document.getElementById('nota4').value);

    const media = (nota1 + nota2 + nota3 + nota4) / 4;

    if (media < 5) {
        resultado.textContent = `Média: ${media.toFixed(2)} - Reprovado`;
        resultado.style.color = 'red';
    } else if (media >= 5 && media < 7) {
        resultado.textContent = `Média: ${media.toFixed(2)} - Recuperação`;
        resultado.style.color = 'orange';
    } else {
        resultado.textContent = `Média: ${media.toFixed(2)} - Aprovado`;
        resultado.style.color = 'green';
    }
});
