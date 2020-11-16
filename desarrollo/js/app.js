import { llenado_mas_informacion } from './llenado_mas_informacion_platillos.js';
import { buscar_ingredientes_extra } from './anadir_orden_funcion.js';
import { eliminar_orden } from './anadir_orden_funcion.js';

const botones_primarios = document.querySelectorAll('.boton_primario');
const botones_secundarios = document.querySelectorAll('.boton_secundario');
const comanda_icono = document.querySelector('.comanda_icono');
const lista_comandas = document.querySelector('.lista_comandas');

const mas_informacion_platillo = document.querySelector(
	'.mas_informacion_platillo'
);

const ver_ingredientes_platillo = () => {
	document.querySelector('.opacidad').classList.toggle('recorrer_ventana');
	mas_informacion_platillo.classList.toggle('recorrer_ventana');
};

botones_primarios.forEach((boton) => {
	boton.addEventListener('click', (e) => {
		buscar_ingredientes_extra(e.target.dataset.id, mas_informacion_platillo);

		const html = `<div class="animacion_orden_anadido">
		<p>Añadido</p>
		<img class="segundo costados" src="Assets/svg/tenedor_solo.svg" alt="">
		<img class="primero centro" src="Assets/svg/plato_solo.svg" alt="">
		<img class="tercero costados" src="Assets/svg/cuchillo_solo.svg" alt="">
		<span class="triangulo"></span>
	</div>`;

		boton.parentElement.insertAdjacentHTML('afterbegin', html);
		
		// animacion_orden_anadido
		setTimeout(() => {
			const animacion_orden_anadido = document.querySelectorAll(
				'.animacion_orden_anadido'
			);
				animacion_orden_anadido.forEach((emergente) => {
					emergente.remove();

					
				})
		}, 2400);
	});
});

botones_secundarios.forEach((boton) => {
	boton.addEventListener('click', (e) => {
		llenado_mas_informacion(e.target.dataset.id);
		ver_ingredientes_platillo();
	});
});

mas_informacion_platillo.addEventListener('click', (e) => {
	if (e.target.classList.contains('cerrar')) {
		ver_ingredientes_platillo();
	}

	if (e.target.classList.contains('realizar-orden')) {
		buscar_ingredientes_extra(e.target.dataset.id, mas_informacion_platillo);
	}
});

comanda_icono.addEventListener('click', () => {
	comanda_icono.classList.toggle('bajar_icono_comanda');
	const contenedor_comanda = document.querySelector('.contenedor_comanda');
	contenedor_comanda.classList.toggle('bajar_comanda');
});

lista_comandas.addEventListener('click', (e) => {
	if (e.target.classList.contains('cerrar_comanda')) {
		// console.log(e.target.dataset.idComandaPlatillo);
		eliminar_orden(e.target.dataset.idComandaPlatillo);
	}
});
