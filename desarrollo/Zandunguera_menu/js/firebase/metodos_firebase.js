import { colocar_platillos } from '../mandar_a_cocina.js';
const db = firebase.firestore();

export const agregar_a_cocina = (
	comanda,
	numero_mesa,
	total,
	fecha,
	IsCooked
) => {
	console.log(comanda);

	db.collection('comandas')
		.add({
			comanda,
			numero_mesa,
			total,
			fecha,
			IsCooked,
		})
		.then(function (docRef) {
			console.log('Document written with ID: ', docRef.id);
			window.location.href = `comanda_en_cocina.html?id=${docRef.id}`; // }, 1000);
		})
		.catch(function (error) {
			console.error('Error adding document: ', error);
		});
};

export const consultar_datos_comanda = (id_comanda) => {
	let docRef = db.collection('comandas').doc(id_comanda);

	docRef
		.get()
		.then(function (doc) {
			if (doc.exists) {
				const datos = doc.data();
				colocar_platillos(datos);
			} else {
				console.log('No such document!');
			}
		})
		.catch(function (error) {
			console.log('Error getting document:', error);
		});
};
