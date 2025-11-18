---
# Calculadora de Descuentos con Estructuras Condicionales

Este proyecto consiste en una página web interactiva que calcula el precio final de un producto aplicando descuentos, según el tipo de cliente y la forma de pago seleccionada.
La interfaz está desarrollada con HTML y Bootstrap 5, mientras que la lógica de cálculo está construida completamente en JavaScript.

---

## Asignatura: Aplicaciones y Tecnologías Web
NRC: 29314

Integrantes GRUPO 4
1. Briggette Floril
2. Abigail Reyes
3. Felix Narvaéz
4. Katherine Vargas
5. Sebastian Sandoval

---

## Objetivo
Aplicar las estructuras condicionales if, el operador ternario y la sentencia switch en JavaScript dentro de una página web utilizando HTML y Bootstrap 5 para el diseño visual.

---

## Funcionalidades Principales

**Formulario que solicita:**
- Nombre del producto
- Precio del producto
- Tipo de cliente → estudiante, adulto, jubilado
- Forma de pago → efectivo, tarjeta, transferencia

**Lógica del cálculo:**
- Descuento base según tipo de cliente (if...else):
- Estudiante → 20%
- Adulto → 10%
- Jubilado → 30%

**Descuento adicional del 5% con operador ternario:**
- Si paga en efectivo → +5%

**Mensaje motivacional según cliente (switch):**
- Personalizado para cada tipo de usuario.

**Resultado mostrado en pantalla:**
- Precio original
- Porcentaje total de descuento
- Monto descontado
- Precio final
- Forma de pago
- Mensaje motivacional

---

## Estructura del proyecto:
```
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
```

---

## Cómo Ejecutar el Proyecto

1. Descarga o clona este repositorio.
2. Asegúrate de mantener la misma estructura de carpetas.
3. Abre el archivo: public/calculadora_descuento.html En un navegador moderno (Chrome, Edge, Firefox, Safari).
4. No se requieren dependencias externas, ni servidor; el proyecto es completamente autónomo.
Con esto ya puedes comenzar a usar la calculadora.

---

## Caracteristicas implementadas:

- ✅ Interfaz con HTML y Bootstrap 5 (local).
- ✅ Lógica condicional **if...else** para descuentos.
- ✅ Operador ternario para descuento en efectivo.
- ✅ **Switch statement** para mensajes personalizados.
- ✅ Visualización completa de resultados.
- ✅ Diseño responsivo y accesible.
- ✅ Código modular y bien documentado.

---