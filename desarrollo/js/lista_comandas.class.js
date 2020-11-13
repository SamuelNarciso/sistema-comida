export class lista_comandas {
	constructor() {
		this.lista_comanda = [];
	}

	agregar_lista(orden) {
		this.lista_comanda.push(orden);
		console.table(this.lista_comanda);
	}
}
