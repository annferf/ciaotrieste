const form = document.querySelector("#info")
const nombre = document.querySelector("#nombre")
const nombreHelp = document.querySelector("#nombreHelp")
const mensaje = document.querySelector("#mensaje")
const mensajeHelp = document.querySelector("#mensajeHelp")

form.addEventListener("submit", (event) => {
	event.preventDefault()
		console.log("Hizo click en Enviar")
})

form.addEventListener("submit", (event) => {
	event.preventDefault()
	if (nombre.value === "" || mensaje.value === "") {
		if (nombre.value === "") {
			nombreHelp.innerText = "Por favor, completar"
		}
		if (mensaje.value === "") {
			mensajeHelp.innerText = "Por favor, completar"
		}
	} else {
		console.log("Funciona")
	}
})


