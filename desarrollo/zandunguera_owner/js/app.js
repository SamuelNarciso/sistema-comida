const btn_llamar_corteCaja = document.querySelector('#btn_llamar_corteCaja');
const cancelar_corte_caja = document.querySelector('#cancelar_fecha');

const corte_caja = document.querySelector('.corte_caja');
const form_ventas_especificas = document.querySelector('#ventas_especificas');
const form_corte_caja = document.querySelector('#formulario_corte_caja');

btn_llamar_corteCaja.addEventListener('click', (e) => {
	corte_caja.classList.toggle('oculta');
});

cancelar_corte_caja.addEventListener('click', () => {
	corte_caja.classList.toggle('oculta');
});

form_ventas_especificas.addEventListener('submit', (e) => {
	e.preventDefault();
	const [fecha, btn] = e.target;
	console.log(fecha.value);
});

form_corte_caja.addEventListener('submit', (e) => {
	e.preventDefault();
	const [fecha_inicio,fecha_fin] = form_corte_caja.querySelectorAll('.selector_fecha');
	console.log(fecha_inicio);
});
