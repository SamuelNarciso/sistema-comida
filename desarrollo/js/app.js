import { llenado_mas_informacion } from './llenado_mas_informacion_platillos.js';
const botones_primarios = document.querySelectorAll('.boton_primario');
const botones_secundarios = document.querySelectorAll('.boton_secundario');
// const cerrar_mas_informacion = document.querySelector(
// 	'#cerrar_mas_informacion'
// );
const mas_informacion_platillo = document.querySelector(
	'.mas_informacion_platillo'
);

const ver_ingredientes_platillo = () => {
	document.querySelector('.opacidad').classList.toggle('recorrer_ventana');
	mas_informacion_platillo.classList.toggle('recorrer_ventana');
};

// cerrar_mas_informacion.addEventListener('click', () => {
// 	ver_ingredientes_platillo();
// });

botones_primarios.forEach((boton) => {
	boton.addEventListener('click', (e) => {
		// busqueda_bd(e.target.dataset.id);
	});
});

botones_secundarios.forEach((boton) => {
	boton.addEventListener('click', (e) => {
		// busqueda_bd(e.target.dataset.id);
		// console.log(e.target.dataset.id);
		llenado_mas_informacion(e.target.dataset.id);
		ver_ingredientes_platillo();
	});
});

mas_informacion_platillo.addEventListener('click', (e) => {
	console.log(e.target.classList);
	if (e.target.classList[0] == 'cerrar') {
		ver_ingredientes_platillo();
	}
});
// console.log(platillos_bd['info_platillo_doblada_quesillo']);
