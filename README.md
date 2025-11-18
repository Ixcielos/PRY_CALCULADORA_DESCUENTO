*Calculadora de Descuentos con Estructuras Condicionales*

Asignatura: Aplicaciones y Tecnologías Web
NRC: 29314

Equipo 4

Brigette Dayanara Floril Pullupaxi

Félix Esteban Narváez Criollo

Janela Abigail Reyes Sánchez

Steven Sebastián Sandoval Casillas

Katherine Gabriela Vargas Chirau

Este proyecto consiste en una página web interactiva que calcula el precio final de un producto aplicando descuentos, según el tipo de cliente y la forma de pago seleccionada.
La interfaz está desarrollada con HTML y Bootstrap 5, mientras que la lógica de cálculo está construida completamente en JavaScript.

*Objetivo*

Aplicar las estructuras condicionales if, el operador ternario y la sentencia switch en JavaScript dentro de una página web utilizando HTML y Bootstrap 5 para el diseño visual.

*Funcionalidades Principales*

Formulario que solicita:

Nombre del producto

Precio del producto

Tipo de cliente → estudiante, adulto, jubilado

Forma de pago → efectivo, tarjeta, transferencia

Lógica del cálculo:

Descuento base según tipo de cliente (if...else):

Estudiante → 20%

Adulto → 10%

Jubilado → 30%

Descuento adicional del 5% con operador ternario:

Si paga en efectivo → +5%

Mensaje motivacional según cliente (switch):

Personalizado para cada tipo de usuario.

Resultado mostrado en pantalla:

Precio original

Porcentaje total de descuento

Monto descontado

Precio final

Forma de pago

Mensaje motivacional

*Estructura del proyecto:*

public/
│── css/
│   └── estilos.css
│
│── js/
│   └── main.js
│
│── vendor/
│   └── bootstrap-5.0.2-dist/
│       ├── css/
│       └── js/
│
└── calculadora_descuento.html
└── README.md

*Cómo Ejecutar el Proyecto*

Descarga o clona este repositorio.

Asegúrate de mantener la misma estructura de carpetas.

Abre el archivo:
public/calculadora_descuento.html

Con esto ya puedes comenzar a usar la calculadora.

La aplicación valida los datos ingresados, calcula los descuentos y muestra un resultado visual dentro de una tarjeta animada usando Bootstrap y estilos propios.

Incluye:

Manejo de eventos con JavaScript

Validaciones

Cálculos dinámicos

Uso de clases CSS para mostrar/ocultar resultados

Animaciones CSS
