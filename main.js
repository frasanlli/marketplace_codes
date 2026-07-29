const input = document.getElementById("txtInput");
const resultado = document.getElementById("resultado");
const marcaResultado = document.getElementById("marcaResultado");
const btnCopiar = document.getElementById("btnCopiar");
const btnBorrar = document.getElementById("btnBorrar");

input.addEventListener("input", actualizar);

function actualizar() {
    let texto = input.value;
    limpiar()

    if (texto.includes("'")) {
        texto = texto.replaceAll("'", "-");
        marcaResultado.textContent = "Amazon";
        marcaResultado.style.background = "#929AF7";
    }

    if (texto.includes("--")) {
        texto = texto.replaceAll("-", "");
        marcaResultado.textContent = "Spartoo";
        marcaResultado.style.background = "#FF6666";
    }

    if (texto.includes("-129")) {
        texto = texto.replaceAll("-129", "");
        marcaResultado.textContent = "Zalando";
        marcaResultado.style.background = "yellow";
    }
    btnBorrar.hidden = false;
    resultado.value = texto;
}

function limpiar(remove = false) {
    if (remove) {
        input.value = '';
    }
    btnBorrar.hidden = true;
    resultado.value = "";
    btnCopiar.textContent = "🗐"
    btnCopiar.style.color = "";
    marcaResultado.textContent = "";
    marcaResultado.style.background = "";
}


btnCopiar.addEventListener("click", () => {
    navigator.clipboard.writeText(resultado.value)
    if (!btnCopiar.textContent.includes("✔")){
        btnCopiar.textContent += "✔"
    }
    btnCopiar.style.color = "green";
});

btnBorrar.addEventListener("click", () => {
    limpiar(true);
});