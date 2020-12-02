import { lista_comanda, extraer_ingredientes } from './anadir_orden_funcion.js';
import { agregar_a_cocina } from './firebase/metodos_firebase.js';

const calcular_total = (lista) => {
	let total = 0;
	lista.forEach((platillo) => {
		total += platillo.precio * 1;
	});
	return total;
};

const obtener_platillos_ingredientes = (lista) => {
	let platillos_ingredientes = [];

	lista.forEach((platillo) => {
		platillos_ingredientes.push({
			nombre: platillo.nombre,
			ingredientes: platillo.ingredientes,
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

export const colocar_platillos = () => {
	const referencia_lista_comandas_platillos = document.querySelector(
		'.lista_comandas_platillos'
	);

	referencia_lista_comandas_platillos.innerHTML = '';
	console.log(lista_comanda.lista_comanda);
	const lista_platillos_comanda = lista_comanda.lista_comanda;

	let platillosHTML = ``;

	lista_platillos_comanda.forEach((platillo) => {
		platillosHTML += obtener_platillos_comanda(platillo);
	});

	referencia_lista_comandas_platillos.innerHTML = ` <p class="titulo_principal">Orden completa</p> `;
};

export const registrar_platillos = () => {
	const lista_platillos_comanda = lista_comanda.lista_comanda;
	const hoy = new Date();
	let fecha =
		hoy.getDate() + '-' + (hoy.getMonth() + 1) + '-' + hoy.getFullYear();

	agregar_a_cocina(
		obtener_platillos_ingredientes(lista_platillos_comanda),
		1,
		calcular_total(lista_platillos_comanda),
		fecha,
	);
};
