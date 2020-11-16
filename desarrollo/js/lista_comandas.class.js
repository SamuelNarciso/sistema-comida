export class lista_comandas {
	constructor() {
		this.lista_comanda = [];
	}

	calcular_precio_total() {
		const costo_total_comanda = document.querySelector('#costo_total_comanda');
		const comanda_icono = document.querySelector('.comanda_icono');
		let precio_total = 0;
		if (this.lista_comanda.length > 0) {
			this.lista_comanda.forEach((platillo) => {
				precio_total += platillo.precio*1;
			});
			comanda_icono.classList.remove('comanda_sin_platillos');
		}else{
			comanda_icono.classList.add('comanda_sin_platillos');
			
		}

		costo_total_comanda.textContent = '' + precio_total;
	}

	agregar_lista(platillo) {
		this.lista_comanda.push(platillo);
		this.calcular_precio_total();
	}

	eliminar_platillo_comanda(id_platillo) {
		console.log(this.lista_comanda);
		let lista_temp = [];
		this.lista_comanda.forEach((platillo) => {
			if (platillo.id_comanda_platillo != id_platillo) {
				lista_temp.push(platillo);
			}
		});
		this.lista_comanda = lista_temp;

		this.calcular_precio_total();
	}
}
