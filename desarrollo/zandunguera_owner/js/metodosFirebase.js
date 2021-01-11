const timestampToDate = (fecha) => {
	const date = new Date(fecha);
	return date.toLocaleDateString();
};
let lista_ventas = [];

const crear_venta = (datos, contenedor_ventas, cantidad_total) => {
	let tr = document.createElement('tr');
	tr.classList.add('venta');

	let html = `
    <td> ${timestampToDate(datos.fecha)} </td>
    <td> ${datos.numero_mesa} </td>
    <td class="total" >$<span class="cantidad">${datos.total}</span></td>`;
	tr.innerHTML = html;
	contenedor_ventas.appendChild(tr);
	cantidad_total.textContent = cantidad_total.textContent * 1 + datos.total * 1;
};

export const buscar_ventas = (db, contenedor_ventas, cantidad_total) => {
	try {
		// db.collection('comandas')
		// .where('IsCooked','==',true)
		//   .orderBy('fecha', 'asc')
		//     .get()
		//     .then(async function (querySnapshot) {
		// 		contenedor_ventas.innerHTML = '';
		// 		cantidad_total.textContent = 0;
		// 		contenedor_ventas.innerHTML = `<tr class="row">
		//     <th colspan="1" scope="col" class="fuerte">Fecha</th>
		//     <th colspan="1" scope="col" class="fuerte">Mesa</th>
		//     <th colspan="1" scope="col" class="fuerte">Total</th>
		//     </tr>`;
		// 		await querySnapshot.forEach((doc) => {
		// 			// datos.push(doc.data())
		// 			crear_venta(doc.data(), contenedor_ventas, cantidad_total);
		// 		});
		//     });

		db.collection('comandas')
			.where('IsCooked', '==', true)
			.orderBy('fecha', 'asc')
			.onSnapshot(async function (querySnapshot) {
				contenedor_ventas.innerHTML = '';
				cantidad_total.textContent = 0;
				contenedor_ventas.innerHTML = `<tr class="row">
            <th colspan="1" scope="col" class="fuerte">Fecha</th>
            <th colspan="1" scope="col" class="fuerte">Mesa</th>
            <th colspan="1" scope="col" class="fuerte">Total</th>
            </tr>`;
				await querySnapshot.forEach((doc) => {
					// datos.push(doc.data())
					crear_venta(doc.data(), contenedor_ventas, cantidad_total);
				});
			});
	} catch (err) {
		console.log('error de conexion' + err);
	}
};
