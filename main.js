const input = document.getElementById("txtInput");
const resultado = document.getElementById("resultado");
const marcaResultado = document.getElementById("marcaResultado");
const boton = document.getElementById("btnCopiar");

input.addEventListener("input", actualizar);

function actualizar() {
    let texto = input.value;

    // Limpiar
    boton.textContent = "🗐"
    boton.style.color = "";
    marcaResultado.textContent = "";
    marcaResultado.style.background = "";

    if (texto.includes("'")) {
        texto = texto.replaceAll("'", "-");
        marcaResultado.textContent = "Amazon";
        marcaResultado.style.background = "#929AF7";
    }

    if (texto.includes("--")) {
        texto = texto.replaceAll("-", "");
        marcaResultado.textContent = "Amazon";
        marcaResultado.style.background = "#FF6666";
    }

    if (texto.includes("-129")) {
        texto = texto.replaceAll("-129", "");
        marcaResultado.textContent = "Zalando";
        marcaResultado.style.background = "yellow";
    }

    resultado.value = texto;
}

boton.addEventListener("click", () => {
    navigator.clipboard.writeText(resultado.value)
    boton.textContent = "✔"
    boton.style.color = "green";
});