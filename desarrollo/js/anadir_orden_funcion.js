import { platillos_bd } from './comidas_bd.js';
import { comanda } from './comanda.class.js';
import { lista_comandas } from './lista_comandas.class.js';
const lista_comanda = new lista_comandas();

export const crear_comanda = (id, ingredientes_extra, cantidad, precio) => {
	const platillo_ordenado = new comanda(
		id,
		ingredientes_extra,
		cantidad,
		precio
	);
	lista_comanda.agregar_lista(platillo_ordenado);
};

export const buscar_ingredientes_extra = (id, platillo) => {
	const ingredintes_extra = platillo.querySelectorAll(
		'.ingredientes_extra form .ingrediente_extra'
	);
	let ingredientes = [];

	ingredintes_extra.forEach((ingrediente) => {
		// console.log(`${ingrediente.id}:  ${ingrediente.checked}`);
		ingrediente.checked ? ingredientes.push(ingrediente.id) : null;
	});
	const precio = platillos_bd[`${id}`].precio_platillo;
	crear_comanda(id, ingredientes, 1, precio);
};
