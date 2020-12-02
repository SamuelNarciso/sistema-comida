const db = firebase.firestore();

export const agregar_a_cocina = (comanda, numero_mesa, total, fecha) => {
	console.log(comanda);

	db.collection('en_cocina')
		.add({
			comanda,
			numero_mesa,
			total,
			fecha,
		})
		.then(function (docRef) {
			console.log('Document written with ID: ', docRef.id);
			// setTimeout(() => {
			// window.location.href = `comanda_en_cocina.html/?parm1=${docRef.id}`; // }, 1000);
			window.location.href = `comanda_en_cocina.html`; // }, 1000);
		})
		.catch(function (error) {
			console.error('Error adding document: ', error);
		});
};

const consultar_datos_comanda = () => {
	let docRef = db.collection('en_cocina').doc('SF');

	docRef
		.get()
		.then(function (doc) {
			if (doc.exists) {
				console.log('Document data:', doc.data());
			} else {
				// doc.data() will be undefined in this case
				console.log('No such document!');
			}
		})
		.catch(function (error) {
			console.log('Error getting document:', error);
		});
};
