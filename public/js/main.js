/* ===================================
   SISTEMA PARA CÁLCULO DE DESCUENTOS - MAIN.JS
   Archivo encargado de gestionar la lógica central
   del funcionamiento de la aplicación, Sebastian Sandoval. 
   =================================== */

// Obtener elementos del DOM
const formulario = document.getElementById('formularioDescuento');
const tarjetaResultado = document.getElementById('tarjetaResultado');
const tituloResultado = document.getElementById('tituloResultado');
const cuerpoResultado = document.getElementById('cuerpoResultado');
const mensajeMotivacional = document.getElementById('mensajeMotivacional');
const botonLimpiar = document.getElementById('botonLimpiar');

// Inicializar evento submit del formulario
document.addEventListener('DOMContentLoaded', function() {
    inicializarFormulario();
});

/**
 * Configura los eventos principales del formulario
 */
function inicializarFormulario() {
    formulario.addEventListener('submit', manejarEnvioFormulario);
    botonLimpiar.addEventListener('click', manejarLimpiar);
}

/**
 * Procesa los datos enviados por el usuario
 * @param {Event} e - Evento generado por el formulario
 */
function manejarEnvioFormulario(e) {
    e.preventDefault();

    // Obtener valores del formulario
    const nombreProducto = document.getElementById('nombreProducto').value.trim();
    const precio = parseFloat(document.getElementById('precioProducto').value);
    const tipoCliente = document.getElementById('tipoCliente').value;
    const formaPago = document.getElementById('formaPago').value;

    // Validar entrada
    if (!validarEntrada(nombreProducto, precio)) {
        mostrarError('Por favor ingrese un nombre de producto y un precio válido.');
        return;
    }

    // Calcular descuentos
    const descuentoBase = obtenerDescuentoBase(tipoCliente);
    const descuentoEfectivo = obtenerDescuentoEfectivo(formaPago);
    const descuentoTotal = descuentoBase + descuentoEfectivo;
    const montoDescuento = (precio * descuentoTotal) / 100;
    const precioFinal = precio - montoDescuento;

    // Obtener mensaje motivacional
    const mensaje = obtenerMensajeMotivacional(tipoCliente);

    // Mostrar resultados
    mostrarResultados(nombreProducto, precio, descuentoTotal, montoDescuento, precioFinal, formaPago, mensaje);
}

/**
 * Verifica que los datos ingresados sean correctos
 * @param {string} productName - Nombre del producto
 * @param {number} price - Precio indicado
 * @returns {boolean} - True si pasa las validaciones
 */
function validarEntrada(nombreProducto, precio) {
    return nombreProducto !== '' && !isNaN(precio) && precio >= 0;
}

/**
 * Retorna el porcentaje de descuento según la categoría del cliente
 * @param {string} clientType - Tipo de cliente seleccionado
 * @returns {number} - Valor del descuento básico
 */
function obtenerDescuentoBase(tipoCliente) {
    if (tipoCliente === 'estudiante') {
        return 20;
    } else if (tipoCliente === 'adulto') {
        return 10;
    } else {
        return 30; // jubilado
    }
}

/**
 * Determina si aplica un descuento extra por forma de pago
 * @param {string} paymentMethod - Método de pago elegido
 * @returns {number} - Descuento adicional
 */
function obtenerDescuentoEfectivo(formaPago) {
    return (formaPago === 'efectivo') ? 5 : 0;
}

/**
 * Genera un mensaje motivacional basado en la categoría del cliente
 * @param {string} clientType - Tipo de cliente
 * @returns {string} - Texto motivacional
 */
function obtenerMensajeMotivacional(tipoCliente) {
    let mensaje = '';
    switch (tipoCliente) {
        case 'estudiante':
            mensaje = '¡Gran elección! Aprovecha tu descuento para seguir aprendiendo.';
            break;
        case 'adulto':
            mensaje = 'Gracias por su preferencia. ¡Disfrute su compra!';
            break;
        case 'jubilado':
            mensaje = '¡Feliz compra! Gracias por confiar en nosotros.';
            break;
        default:
            mensaje = '';
    }
    return mensaje;
}

/**
 * Renderiza los datos calculados en la interfaz gráfica
 */
function mostrarResultados(nombreProducto, precio, descuentoTotal, montoDescuento, precioFinal, formaPago, mensaje) {
    tarjetaResultado.style.display = 'block';
    tarjetaResultado.classList.add('mostrar', 'borde-exito');

    tituloResultado.textContent = `Resultado para: ${nombreProducto}`;

    cuerpoResultado.innerHTML = `
        <ul class="list-unstyled mb-0">
            <li><strong>Precio original:</strong> $${precio.toFixed(2)}</li>
            <li><strong>Porcentaje de descuento aplicado:</strong> ${descuentoTotal}%</li>
            <li><strong>Monto descontado:</strong> $${montoDescuento.toFixed(2)}</li>
            <li><strong>Precio final:</strong> $${precioFinal.toFixed(2)}</li>
            <li><strong>Forma de pago:</strong> ${capitalizarTexto(formaPago)}</li>
        </ul>
    `;

    mensajeMotivacional.innerHTML = `<div class="alert alert-info mt-3 mb-0">${mensaje}</div>`;

    tarjetaResultado.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

/**
 * Presenta un mensaje de error cuando la entrada no es válida
 */
function mostrarError(mensajeError) {
    tarjetaResultado.style.display = 'block';
    tarjetaResultado.classList.remove('borde-exito');
    tituloResultado.textContent = 'Error en los datos';
    cuerpoResultado.innerHTML = `<div class="alert alert-danger mb-0">${mensajeError}</div>`;
    mensajeMotivacional.innerHTML = '';
}

/**
 * Restablece los campos y oculta la tarjeta de resultados
 */
function manejarLimpiar() {
    formulario.reset();
    tarjetaResultado.style.display = 'none';
    tarjetaResultado.classList.remove('mostrar');
}

/**
 * Convierte la primera letra en mayúscula
 * @param {string} text - Texto de entrada
 * @returns {string} - Texto formateado
 */
function capitalizarTexto(texto) {
    return texto.charAt(0).toUpperCase() + texto.slice(1);
}
