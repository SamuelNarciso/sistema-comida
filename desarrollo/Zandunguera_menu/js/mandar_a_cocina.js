import { lista_comanda, extraer_ingredientes } from './anadir_orden_funcion.js';
import { platillos_bd } from './comidas_bd.js';
import { agregar_a_cocina } from './firebase/metodos_firebase.js';

const calcular_total = (lista) => {
	let total = 0;
	lista.forEach((platillo) => {
		total += platillo.precio * 1;
	});
	return total;
};

const obtener_platillos_ingredientes = (lista) => {
	console.log(lista);
	let platillos_ingredientes = [];

	lista.forEach((platillo) => {
		platillos_ingredientes.push({
			nombre: platillo.nombre,
			ingredientes: platillo.ingredientes,
			precio: platillo.precio,
		});
	});

	platillos_ingredientes =
		platillos_ingredientes.length > 0 ? platillos_ingredientes : null;

	return platillos_ingredientes;
};

const obtener_platillos_comanda = (platillo) => {
	const html = `
	<div class="contenido_comanda_platillo">
	<div class="titulo_comanda">
	<p> ${platillo.nombre} </p>
	</div>
	<div class="ingredientes_comanda">
	${extraer_ingredientes(platillo)}
	</div>
	<p class="precio">$ ${platillo.precio} </p>
	</div>
	`;

	return html;
};

export const colocar_platillos = (comanda_data) => {
	const referencia_lista_comandas_platillos = document.querySelector(
		'.lista_comandas_platillos'
	);

	referencia_lista_comandas_platillos.innerHTML = '';

	let platillosHTML = ``;
	comanda_data.comanda.forEach((platillo) => {
		platillosHTML += obtener_platillos_comanda(platillo);
	});

	console.log(comanda_data);
	document.querySelector('.precio_total').textContent =
		'$ ' + comanda_data.total;
	referencia_lista_comandas_platillos.innerHTML = platillosHTML;
};

export const registrar_platillos = () => {
	const lista_platillos_comanda = lista_comanda.lista_comanda;
	const fecha = new Date().getTime();

	agregar_a_cocina(
		obtener_platillos_ingredientes(lista_platillos_comanda),
		1,
		calcular_total(lista_platillos_comanda),
		fecha,
		false
	);
};
