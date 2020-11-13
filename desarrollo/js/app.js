import { platillos_bd } from './comidas_bd.js';
const botones_primarios = document.querySelectorAll('.boton_primario');
const botones_secundarios = document.querySelectorAll('.boton_secundario');
const cerrar_mas_informacion = document.querySelector(
	'#cerrar_mas_informacion'
);

const busqueda_bd = (id) => {
	console.log(id);
	console.log(platillos_bd[`${id}`]);
};

const ver_ingredientes_platillo = () => {
	const opacidad = document.querySelector('.opacidad');
	const mas_informacion = document.querySelector('.mas_informacion_platillo');

	opacidad.classList.toggle('recorrer_ventana');
	mas_informacion.classList.toggle('recorrer_ventana');
};

cerrar_mas_informacion.addEventListener('click', () => {
	ver_ingredientes_platillo();
});

botones_primarios.forEach((boton) => {
	boton.addEventListener('click', (e) => {
		busqueda_bd(e.target.dataset.id);
	});
});

botones_secundarios.forEach((boton) => {
	boton.addEventListener('click', (e) => {
		busqueda_bd(e.target.dataset.id);
		ver_ingredientes_platillo();
	});
});

// console.log(platillos_bd['info_platillo_doblada_quesillo']);
