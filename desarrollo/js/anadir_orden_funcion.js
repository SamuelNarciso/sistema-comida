export const buscar_ingredientes_extra = (boton) => {
	const ingredintes_extra = boton.querySelectorAll(
		'.ingredientes_extra form .ingrediente_extra'
    );
    
	ingredintes_extra.forEach((ingrediente) => {
		console.log(`${ingrediente.id}:  ${ingrediente.checked}`);
	});
};
