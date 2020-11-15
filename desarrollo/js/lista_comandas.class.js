export class lista_comandas {
	constructor() {
		this.lista_comanda = [];
	}

	calcular_precio_total() {
		const costo_total_comanda = document.querySelector('#costo_total_comanda');
		let precio_total = 0;
		if (this.lista_comanda.length > 0) {
			this.lista_comanda.forEach((platillo) => {
				precio_total += platillo.precio*1;
			});
		}

		costo_total_comanda.textContent = '' + precio_total;
	}

	hola() {
		console.log('hola');
	}

	agregar_lista(platillo) {
		this.lista_comanda.push(platillo);
		this.calcular_precio_total();
		// console.table(this.lista_comanda);
	}

	eliminar_platillo_comanda(id_platillo) {
		console.log(this.lista_comanda);
		let lista_temp = [];
		this.lista_comanda.forEach((platillo) => {
			if (platillo.id_comanda_platillo != id_platillo) {
				lista_temp.push(platillo);
				// console.log('Se queda: ' + platillo.nombre);
			}
		});
		this.lista_comanda = lista_temp;

		this.calcular_precio_total();
	}
}
