export class comanda {
	constructor(id, ingredientes, cantidad, precio,nombre,numero_mesa) {
		this.id = id;
		this.cantidad = cantidad;
		this.ingredientes = ingredientes;
		this.precio = precio;
		this.nombre = nombre;
		this.id_comanda_platillo = new Date().getTime();
		this.numero_mesa = numero_mesa;
	}
}
