import { platillos_bd } from './comidas_bd.js';
import { comanda } from './comanda.class.js';
import { lista_comandas } from './lista_comandas.class.js';
export const lista_comanda = new lista_comandas();

export const crear_comanda = (
	id,
	ingredientes_extra,
	cantidad,
	precio,
	nombre
) => {
	const platillo_ordenado = new comanda(
		id,
		ingredientes_extra,
		cantidad,
		precio,
		nombre
	);
	lista_comanda.agregar_lista(platillo_ordenado);
	extraer_platillo_comanda(lista_comanda.lista_comanda);
};

const insertar_platillos_comanda_visual = (html_platillos_comanda) => {
	const lista_comandas_visual = document.querySelector('.lista_comandas');
	lista_comandas_visual.innerHTML = html_platillos_comanda;
};

export const extraer_ingredientes = (comanda_platillo) => {
	let html_ingredientes_platillo = ``;
	if (comanda_platillo.ingredientes.length > 0) {
		comanda_platillo.ingredientes.forEach((ingrediente) => {
			html_ingredientes_platillo += `<p class="item">${ingrediente} </p>`;
		});
	} else {
		html_ingredientes_platillo = `<p  class="item color_rojo"> No agrego ingredientes extra </p>`;
	}
	return html_ingredientes_platillo;
};

const extraer_platillo_comanda = (lista_comanda) => {
	let html_platillos_comanda = ``;
	lista_comanda.forEach((comanda_platillo) => {
		html_platillos_comanda += `<div data-id-comanda-platillo="${
			comanda_platillo.id_comanda_platillo
		}" class="contenido_comanda_platillo">
			<div class="titulo_comanda">
				<p>${comanda_platillo.nombre} </p>
				<input data-id-comanda-platillo="${
					comanda_platillo.id_comanda_platillo
				}" class="cerrar_comanda" type="button" value="X">
			</div>
			<div class="ingredientes_comanda">
			${extraer_ingredientes(comanda_platillo)}
			</div> </div> `;
	});

	insertar_platillos_comanda_visual(html_platillos_comanda);
};

export const buscar_ingredientes_extra = (id, platillo) => {
	let ingredientes = [];
	
	if (platillo) {
		const ingredientes_extra = platillo.querySelectorAll(
			'.ingredientes_extra form .ingrediente_extra'
		);

		ingredientes_extra.forEach((ingrediente) => {
			ingrediente.checked ? ingredientes.push(ingrediente.id) : null;
		});
	}

	const precio = platillos_bd[`${id}`].precio_platillo;
	const nombre = platillos_bd[`${id}`].nombre_platillo;
	crear_comanda(id, ingredientes, 1, precio, nombre);
};

export const eliminar_orden = (id) => {
	lista_comanda.eliminar_platillo_comanda(id);
	extraer_platillo_comanda(lista_comanda.lista_comanda);
};
