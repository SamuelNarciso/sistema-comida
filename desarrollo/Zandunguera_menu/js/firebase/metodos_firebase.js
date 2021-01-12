import { colocar_platillos } from '../mandar_a_cocina.js';
const db = firebase.firestore();

const getDayCode=()=>{
	let fecha_dia = new Date().getDate();
	let fecha_mes = new Date().getMonth();
	let fecha_anio = new Date().getFullYear();

	fecha_mes= (fecha_mes*1+1 < 10)? (`0${fecha_mes*1 +1}`) : fecha_mes //01
	fecha_dia= (fecha_dia*1 < 10) ? `0${fecha_dia}` :fecha_dia //11
	fecha_anio = (fecha_anio*1 - 2000) //21

	return(fecha_mes+fecha_dia+fecha_anio*1)	//011121;
}

export const agregar_a_cocina = (
	comanda,
	numero_mesa,
	total,
	fecha,
	IsCooked
) => {
	// console.log(comanda);
	

	db.collection('comandas')
		.add({
			comanda,
			numero_mesa,
			total,
			fecha,
			IsCooked,
			dayCode:getDayCode()

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
