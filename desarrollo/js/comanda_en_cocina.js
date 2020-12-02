import { datos_curiosos_bd } from '../js/comidas_bd.js';

const titulo_dato = document.querySelector('#titulo_dato');
const descripcion_dato = document.querySelector('#descripcion_dato');

const dato_curioso_random = () => {
	const random_value = Math.floor(Math.random() * datos_curiosos_bd.length);
	return datos_curiosos_bd[random_value];
};

const { titulo, descripcion } = dato_curioso_random();

titulo_dato.textContent = titulo;
descripcion_dato.textContent = descripcion;
