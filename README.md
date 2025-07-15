# Estimador de Tiempos de Trazabilidad

Esta es una herramienta simple para estimar el tiempo requerido para completar un proyecto de desarrollo de software basado en la cantidad de scripts, la longitud de las líneas de código y el rendimiento del equipo.

## Uso

1.  Abre el archivo `views/index.html` en tu navegador.
2.  Rellena los campos del formulario:
    *   **Cantidad de Scripts:** El número total de scripts a desarrollar.
    *   **Longitud Mínima de Líneas:** La longitud mínima estimada de un script.
    *   **Longitud Máxima de Líneas:** La longitud máxima estimada de un script.
    *   **Promedio de Avance Persona 1 (líneas/día):** El número de líneas de código que la primera persona puede escribir por día.
    *   **Promedio de Avance Persona 2 (líneas/día, opcional):** El número de líneas de código que la segunda persona puede escribir por día.
    *   **Fecha de Inicio:** La fecha en que comenzará el proyecto.
    *   **Fecha de Cierre Estimada:** La fecha en que te gustaría que terminara el proyecto.
3.  Haz clic en "Calcular Estimación".

La aplicación mostrará la fecha de cierre calculada, una validación de la fecha de cierre estimada y un diagrama de Gantt que visualiza el cronograma del proyecto.

## Autor

*   **Miguel Jonathan Mogrovejo Cardenas**
