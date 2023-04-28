var lista = new AulaDAO();
const botao = document.getElementById("botaoExportar")
botao.onclick = exportar

function exportar() {
    exportToCsv("Aulas.csv", lista.listaaulas)
}

function exportToCsv(filename, data) {
    const headers = Object.keys(data[0]);
    const values = data.map((obj) => Object.values(obj));
    const csvData = [headers, ...values].map((row) => row.join(",")).join("\n");
    const blob = new Blob([csvData], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}