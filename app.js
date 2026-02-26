const imagenes = [
  "imagenes/image-experiencias.webp",
  "https://i5.walmartimages.com/seo/Velvet-Living-Room-Couch-Comfy-3-Seater-Sofa-with-4-Metal-Legs-Button-Tufted-Backrest-Upholstered-Sofa-Couch-for-Bedroom-Office-Apartment-Black_6e18fd3d-add7-4bd9-9f02-0381debfbaa7.96920e4554666fa8239f0737b267bf5b.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
  "https://m.media-amazon.com/images/I/91HdTKCs8-L._AC_UF894,1000_QL80_.jpg"
]

const botonSiguiente = document.querySelector('.boton-siguiente')
const botonAnterior = document.querySelector('.boton-anterior')
const imagen = document.querySelector('.imagen-carrusel')

let imagenActual = 0

botonAnterior.addEventListener('click', function() {

  imagenActual = imagenActual - 1

  if (imagenActual <= -1) {
    imagenActual = imagenes.length - 1
  }

  imagen.src = imagenes[imagenActual]

})

botonSiguiente.addEventListener('click', function() {

  imagenActual = imagenActual + 1

  if (imagenActual > imagenes.length - 1) {
    imagenActual = 0
  }

  imagen.src = imagenes[imagenActual]

})