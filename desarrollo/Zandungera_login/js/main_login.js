const formulario_acceso = document.querySelector('#formulario_acceso');

const hacerLogin = (usuario, password) => {
	firebase
		.auth()
		.signInWithEmailAndPassword(usuario, password)
		.then((user) => {
			console.log('Acceso correcto... creo ');
			console.log(user.uid);

			firebase.auth().onAuthStateChanged((user) => {
				if (user) {
					var uid = user.uid;
					console.log(user)
					console.log(uid);
				} else {
					console.log('No hay nadie logueado');
				}
			});
		})
		.catch((error) => {
			var errorCode = error.code;
			var errorMessage = error.message;
			// console.log(errorCode);
			console.log(errorMessage);
		});
};

formulario_acceso.addEventListener('submit', (e) => {
	e.preventDefault();
	const usuario = e.target.usuario.value;
	const password = e.target.password.value;

	
	hacerLogin(usuario, password);


});
