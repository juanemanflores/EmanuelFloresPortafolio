import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './style.css'

const visorProyecto = document.querySelector('.visor-proyecto')
const imagenAmpliada = document.querySelector('.visor-imagen')
const tituloAmpliado = document.querySelector('.visor-titulo')

document.querySelectorAll('[data-image-preview]').forEach((boton) => {
  boton.addEventListener('click', () => {
    const imagen = boton.querySelector('img')
    const proyecto = boton.closest('.proyecto')

    imagenAmpliada.src = imagen.currentSrc || imagen.src
    imagenAmpliada.alt = imagen.alt
    tituloAmpliado.textContent = proyecto.querySelector('h3').textContent
    visorProyecto.showModal()
  })
})

document.querySelector('[data-close-preview]').addEventListener('click', () => {
  visorProyecto.close()
})

visorProyecto.addEventListener('click', (evento) => {
  if (evento.target === visorProyecto) visorProyecto.close()
})

visorProyecto.addEventListener('close', () => {
  imagenAmpliada.src = ''
  imagenAmpliada.alt = ''
  tituloAmpliado.textContent = ''
})
