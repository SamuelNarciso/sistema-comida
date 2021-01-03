import { platillos_bd } from './comidas_bd.js';

const busqueda_datos_bd = (id) => {
	return platillos_bd[id];
};

const colocar_ingredientes_principales = (lista_ingredientes) => {
	let html_lista_ingredientes = ``;
	lista_ingredientes.forEach((ingrediente) => {
        html_lista_ingredientes += 
        `<li class="ingrediente_contenido"> <p class="texto_contenido">${ingrediente}</p> </li> `;
	});

	return html_lista_ingredientes;
};

const colocar_ingredientes_extra = (lista_ingredientes_extra) => {
	let html_lista_ingredientes_extra = ``;
	lista_ingredientes_extra.forEach((ingrediente) => {
		html_lista_ingredientes_extra += `<li class="label_input">
        <label for="${ingrediente}">${ingrediente}</label>
        <input type="checkbox" name="${ingrediente}" class="ingrediente_extra" id="${ingrediente}"/>
        </li>`;
	});

	return html_lista_ingredientes_extra;
};

export const llenado_mas_informacion = (id) => {
	const {
		nombre_platillo,
		id_platillo,
		ruta_imagen_platillo,
		alt_imagen,
		precio_platillo,
		ingredientes_principales,
		ingredientes_extra,
		descripcion_platillo,
	} = busqueda_datos_bd(id);


	const foto_comida_estructura = document.querySelector(
		'#foto_comida_estructura'
	);
	const mas_informacion_estructura = document.querySelector(
		'#mas_informacion_estructura'
	);

	const html_foto_comida = `<img src="${ruta_imagen_platillo}" alt="${alt_imagen}" />`;

	const html_informacion = `<input type="button" id="cerrar_mas_informacion" class="cerrar " value="X" />
        <h1 class="titulo nombre_platillo">${nombre_platillo}</h1>     
        
        <div class="precio_botonOrden">
            <p class="precio">$${precio_platillo}</p>
            <input data-id="${id_platillo}"
             type="button"
             class="boton realizar-orden "
             value="Añadir a la orden " />
        </div>
        
    <div class="contenedor_todos_ingredientes">
        <div class="ingredientes">
            <p class="titulo">Ingredientes</p>
            <ul class="lista_ingredientes">
            ${colocar_ingredientes_principales(ingredientes_principales)}
            </ul>
        </div>
    
        <ul class="ingredientes_extra">
            <p class="titulo">Ingredientes extra, agregables</p>
            <form>
                ${colocar_ingredientes_extra(ingredientes_extra)}
            </form>
        </ul>
    </div>

    <div class="descripcion_comida">
        <p class="titulo">Descripcion de la comida</p>
        <p class="texto_contenido">${descripcion_platillo}</p>
    </div>`;

	foto_comida_estructura.innerHTML = html_foto_comida;
	mas_informacion_estructura.innerHTML = html_informacion;
};
