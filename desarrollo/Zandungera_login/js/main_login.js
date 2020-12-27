let db = firebase.firestore();
const formulario_acceso = document.querySelector('#formulario_acceso');

const redirectTo = (datos_rol) => {
	switch (datos_rol.rol) {
		case 'mesa':
			// window.location.href = `comanda_en_cocina.html?id=${docRef.id}`;


			console.log('rol: ' + datos_rol.rol);
			console.log('numero_mesa: ' + datos_rol.numero_mesa);
				window.location.href = `../desarrollo/Zandunguera_menu`
				break;
				case 'cocinero':
					console.log('rol: ' + datos_rol.rol);
					window.location.href = `../desarrollo/Zandunguera_cocinero`
			break;
	}
};

 const  get_user_rol = async (user) => {
	await db.collection('usuarios')
		.doc(user.uid)
		.get()
		.then(function (doc) {
			if (doc.exists) {
			redirectTo(doc.data().datos_rol);
			} else {
				console.log('No se encontro el documento.');
			}
		});
};

const hacerLogin = (usuario, password) => {
	firebase
		.auth()
		.signInWithEmailAndPassword(usuario, password)
		.then((user) => {
			console.log('Acceso correcto... creo ');
			console.log(user.uid);

			firebase.auth().onAuthStateChanged((user) => {
				if (user) {
					get_user_rol(user);
				} else {
					console.log('No hay nadie logueado');
				}
			});
		})
		.catch((error) => {
			var errorMessage = error.message;
			console.log(errorMessage);
		});
};

formulario_acceso.addEventListener('submit', (e) => {
	e.preventDefault();
	const usuario = e.target.usuario.value;
	const password = e.target.password.value;

	hacerLogin(usuario, password);
});
