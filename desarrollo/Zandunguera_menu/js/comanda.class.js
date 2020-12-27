export class comanda {
	constructor(id, ingredientes, cantidad, precio,nombre) {
		this.id = id;
		this.cantidad = cantidad;
		this.ingredientes = ingredientes;
		this.precio = precio;
		this.nombre = nombre;
		this.id_comanda_platillo = new Date().getTime();
	}
}
