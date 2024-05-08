function girarImagen() {
  var imagen = document.getElementById("imagen");
  var texto = document.getElementById("texto");

  // Girar la imagen 360 grados
  imagen.style.transform = "rotate(360deg)";
  
  // Mostrar el texto
  texto.style.display = "block";
}
