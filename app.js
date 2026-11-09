let votos = { '0-9': 0, '0-8': 0, 'NR': 0 };
let total = 0;

function votar(opcion) {
    votos[opcion]++;
    total++;
    actualizarResultados();
}

function actualizarResultados() {
    document.getElementById('totalVotos').innerText = total;
    
    let html = '';
    for (const [key, value] of Object.entries(votos)) {
        let porcentaje = total > 0 ? ((value / total) * 100).toFixed(2) : 0;
        html += `<p>${key}: ${value} votos (${porcentaje}%)</p>`;
    }
    document.getElementById('resultados').innerHTML = html;
}