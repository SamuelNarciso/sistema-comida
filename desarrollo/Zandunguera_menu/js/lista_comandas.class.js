export class lista_comandas {
	constructor() {
		this.lista_comanda = [];
	}

	colocar_html_precio_total(precio_total) {
		const costo_total_comanda = document.querySelector('#costo_total_comanda');
		const cantidad_platillos = document.querySelector('.cantidad_platillos');
		cantidad_platillos.textContent = this.lista_comanda.length;
		costo_total_comanda.textContent = '' + precio_total;
	}

	calcular_precio_total() {
		const comanda_icono = document.querySelector('.comanda_icono');
		let precio_total = 0;
		this.lista_comanda.forEach((platillo) => { precio_total += platillo.precio * 1;	});

		(this.lista_comanda.length)
			? comanda_icono.classList.remove('comanda_sin_platillos')
			: comanda_icono.classList.add('comanda_sin_platillos');

		this.colocar_html_precio_total(precio_total);
	}

	agregar_lista(platillo) {
		this.lista_comanda.push(platillo);
		this.calcular_precio_total();
	}

	eliminar_platillo_comanda(id_platillo) {
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
