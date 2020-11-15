import { platillos_bd } from './comidas_bd.js';


const busqueda_bd = (id) => {
	return platillos_bd[`${id}`];
};

const colocar_ingredientes_principales = (lista_ingredientes) => {
	let html_lista_ingredientes = ``;
	lista_ingredientes.forEach((ingrediente) => {
		html_lista_ingredientes += `
        <div class="ingrediente_contenido">
            <p class="texto_contenido">${ingrediente}</p>
        </div>

        `;
	});

	return html_lista_ingredientes;
};

const colocar_ingredientes_extra = (lista_ingredientes_extra) => {
	let html_lista_ingredientes_extra = ``;
	lista_ingredientes_extra.forEach((ingrediente) => {
		html_lista_ingredientes_extra += `
    <div class="label_input">
    <label for="ingrediente_${ingrediente}">${ingrediente}</label>
      <input type="checkbox" name="ingrediente_${ingrediente}" class="ingrediente_extra" id="ingrediente_${ingrediente}" />
    </div>

        `;
	});

	return html_lista_ingredientes_extra;
};

export const llenado_mas_informacion = (id) => {
	const foto_comida_estructura = document.querySelector(
		'#foto_comida_estructura'
	);
	const mas_informacion_estructura = document.querySelector(
		'#mas_informacion_estructura'
	);

	const datos_platillo = busqueda_bd(id);


    const html_foto_comida = `<img src="${datos_platillo.ruta_imagen_platillo}" alt="${datos_platillo.alt_imagen}" />`;
    
	const html_informacion = `<input type="button" id="cerrar_mas_informacion" class="cerrar" value="X" />
        <h1 class="titulo nombre_platillo">${datos_platillo.nombre_platillo}</h1>     
        <div class="precio_botonOrden">
            <p class="precio">$${datos_platillo.precio_platillo}</p>
            <input data-id="${datos_platillo.id_platillo}" type="button" class="boton realizar-orden"value="Añadir a la orden " />
        </div>
        <div class="ingredientes">
            <p class="titulo">Ingredientes</p>
            <div class="lista_ingredientes">
            ${colocar_ingredientes_principales(datos_platillo.ingredientes_principales)}
            </div>
        </div>
        <div class="ingredientes_extra">
            <p class="titulo">Ingredientes extra, agregables</p>
            <form>
                ${colocar_ingredientes_extra(datos_platillo.ingredientes_extra)}
            </form>
        </div>
        <div class="descripcion_comida">
            <p class="titulo">Descripcion de la comida</p>
            <p class="texto_contenido">${datos_platillo.descripcion_platillo}</p>
        </div>`;

	const html_estructura_mas_informacion = `
    <div class="foto_comida">
    
    </div>

    <div class="informacion">
        <input type="button" id="cerrar_mas_informacion" class="cerrar" value="X" />
        
    </div>`;

	foto_comida_estructura.innerHTML = html_foto_comida;
	mas_informacion_estructura.innerHTML = html_informacion;
};
