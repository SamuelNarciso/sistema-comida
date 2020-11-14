import { llenado_mas_informacion } from './llenado_mas_informacion_platillos.js';
import { buscar_ingredientes_extra } from './anadir_orden_funcion.js';

const botones_primarios = document.querySelectorAll('.boton_primario');
const botones_secundarios = document.querySelectorAll('.boton_secundario');
const comanda_icono = document.querySelector('.comanda_icono');

const mas_informacion_platillo = document.querySelector(
	'.mas_informacion_platillo'
);

const ver_ingredientes_platillo = () => {
	document.querySelector('.opacidad').classList.toggle('recorrer_ventana');
	mas_informacion_platillo.classList.toggle('recorrer_ventana');
};

botones_primarios.forEach((boton) => {
	boton.addEventListener('click', (e) => {
		// console.log(e.target.dataset.id);
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
