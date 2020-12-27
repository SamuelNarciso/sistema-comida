import {
	agregar_a_cocina,
	consultar_datos_comanda,
} from './firebase/metodos_firebase.js';

const id_comanda = window.location.search.slice(4);

consultar_datos_comanda(id_comanda)