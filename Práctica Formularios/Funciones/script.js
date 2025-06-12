function validarLogin(e) {
  e.preventDefault();
  const user = document.getElementById("login-usuario").value.trim();
  const pass = document.getElementById("login-contrasena").value;

  if (user === "admin" && pass === "1234") {
    window.location.href = "home.html";
  } else {
    alert("Usuario o contraseña incorrectos.");
  }
}


function validarAcceso(e) {
  e.preventDefault();
  const usuario = document.getElementById("usuario").value.trim();
  const contrasena = document.getElementById("contrasena").value;

  if (usuario && contrasena) {
    sessionStorage.setItem("acceso", JSON.stringify({ usuario }));
    window.location.href = "confirmacion.html?form=acceso";
  } else {
    alert("Todos los campos son obligatorios.");
  }
}


function validarRegistro(e) {
  e.preventDefault();
  const usuario = document.getElementById("usuario").value.trim();
  const email = document.getElementById("email").value.trim();
  const contrasena = document.getElementById("contrasena").value;
  const repetir = document.getElementById("repetirContrasena").value;
  const nombre = document.getElementById("nombreCompleto").value.trim();
  const acepta = document.getElementById("acepta").checked;
  const noCorreos = document.getElementById("noCorreos").checked;

  if (!usuario || !email || !contrasena || !repetir || !nombre) {
    alert("Completa todos los campos.");
    return;
  }

  if (!acepta) {
    alert("Debes aceptar los términos.");
    return;
  }

  if (contrasena !== repetir) {
    alert("Las contraseñas no coinciden.");
    return;
  }

  const datos = { usuario, email, nombre, noCorreos };
  sessionStorage.setItem("registro", JSON.stringify(datos));
  window.location.href = "confirmacion.html?form=registro";
}


function validarSuscripcion(e) {
  e.preventDefault();
  const email = document.getElementById("email").value.trim();
  const nombre = document.getElementById("nombre").value.trim();

  if (!email || !nombre) {
    alert("Todos los campos son obligatorios.");
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    alert("Correo inválido.");
    return;
  }

  const datos = { email, nombre };
  sessionStorage.setItem("suscripcion", JSON.stringify(datos));
  window.location.href = "confirmacion.html?form=suscripcion";
}


function validarContacto(e) {
  e.preventDefault();
  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();
  const privacidad = document.getElementById('privacidad').checked;

  if (!nombre || !email || !mensaje) {
    alert("Por favor, completa todos los campos.");
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    alert("Correo no válido.");
    return;
  }

  const datos = { nombre, email, mensaje };
  sessionStorage.setItem("contacto", JSON.stringify(datos));
  window.location.href = "confirmacion.html?form=contacto";
}


function validarEntradaGeneral(e) {
  e.preventDefault();
  const nombre = document.getElementById("nombre").value.trim();
  const edad = document.getElementById("edad").value.trim();
  const comentario = document.getElementById("comentario").value.trim();

  if (!nombre || !edad || !comentario) {
    alert("Todos los campos son obligatorios.");
    return;
  }

  if (isNaN(edad) || parseInt(edad) < 0) {
    alert("Edad inválida.");
    return;
  }

  const datos = { nombre, edad, comentario };
  sessionStorage.setItem("entrada", JSON.stringify(datos));
  window.location.href = "confirmacion.html?form=entrada";
}