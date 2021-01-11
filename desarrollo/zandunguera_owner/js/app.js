import { buscar_ventas } from './metodosFirebase.js';
const btn_llamar_corteCaja = document.querySelector('#btn_llamar_corteCaja');
const cancelar_corte_caja = document.querySelector('#cancelar_fecha');
const corte_caja = document.querySelector('.corte_caja');
const form_ventas_especificas = document.querySelector('#ventas_especificas');
const form_corte_caja = document.querySelector('#formulario_corte_caja');
const cantidad_total = document.querySelector('.cantidad_total_caja');
const lista_ventas = document.querySelector('.lista_ventas');
const db = firebase.firestore();

buscar_ventas(db, lista_ventas, cantidad_total);

btn_llamar_corteCaja.addEventListener('click', (e) => {
	corte_caja.classList.toggle('oculta');
});

cancelar_corte_caja.addEventListener('click', () => {
	corte_caja.classList.toggle('oculta');
});

form_ventas_especificas.addEventListener('submit', (e) => {
	e.preventDefault();
	let [fecha, btn] = e.target;
	fecha = fecha.value;
	console.log(fecha);
	let dia=(fecha==1||fecha==3||fecha==5||fecha==7||fecha==8||fecha==10||fecha==12)? 31
	:(fecha == 2)? 28 : 30


	let fecha_min = new Date(2020, fecha, 1);

	let fecha_max = new Date(2020, fecha, dia);

	console.log('fecha_min: ' + fecha_min);
	console.log('fecha_max: ' + fecha_max);
	
	console.log('fecha_min: ' + fecha_min.getTime());
	console.log('fecha_max: ' + fecha_max.getTime());
});

form_corte_caja.addEventListener('submit', (e) => {
	e.preventDefault();
	const [fecha_inicio, fecha_fin] = form_corte_caja.querySelectorAll(
		'.selector_fecha'
	);
	console.log('fecha_inicio: ' + fecha_inicio.value);
	console.log('fecha_fin: ' + fecha_fin.value);
});
