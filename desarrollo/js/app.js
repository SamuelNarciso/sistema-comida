import { llenado_mas_informacion } from './llenado_mas_informacion_platillos.js';
import { buscar_ingredientes_extra } from './anadir_orden_funcion.js';
import { eliminar_orden } from './anadir_orden_funcion.js';
import { obtener_platillos_comanda } from './mandar_a_cocina.js';
const botones_primarios = document.querySelectorAll('.boton_primario');
const botones_secundarios = document.querySelectorAll('.boton_secundario');
const comanda_icono = document.querySelector('.comanda_icono');
const lista_comandas = document.querySelector('.lista_comandas');
const mas_informacion_platillo = document.querySelector(
	'.mas_informacion_platillo'
);
const mandar_a_cocina = document.querySelector('#mandar_a_cocina');

const ver_ingredientes_platillo = () => {
	document.querySelector('.opacidad').classList.toggle('recorrer_ventana');
	mas_informacion_platillo.classList.toggle('recorrer_ventana');
};

botones_primarios.forEach((boton) => {
	boton.addEventListener('click', (e) => {
		buscar_ingredientes_extra(e.target.dataset.id, mas_informacion_platillo);
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

mandar_a_cocina.addEventListener('click', (e) => {
	obtener_platillos_comanda();
});
