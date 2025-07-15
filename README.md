# Estimador de Tiempos de Trazabilidad

Esta es una herramienta simple para estimar el tiempo requerido para completar un proyecto de desarrollo de software basado en la cantidad de scripts, la longitud de las líneas de código y el rendimiento del equipo.

## Instalación

1.  Clona este repositorio en tu máquina local:
    ```
    git clone https://github.com/mmmogrovejoca/EstimadorDeTrazabilidad.git
    ```
2.  Navega al directorio del proyecto:
    ```
    cd EstimadorDeTrazabilidad
    ```
3.  Abre el archivo `index.html` en tu navegador.

## Guía de Uso

1.  **Abre `index.html` en tu navegador.**
2.  **Rellena los campos del formulario:**
    *   **Cantidad de Scripts:** El número total de scripts a desarrollar.
    *   **Longitud Mínima de Líneas:** La longitud mínima estimada de un script.
    *   **Longitud Máxima de Líneas:** La longitud máxima estimada de un script.
    *   **Promedio de Avance Persona 1 (líneas/día):** El número de líneas de código que la primera persona puede escribir por día.
    *   **Promedio de Avance Persona 2 (líneas/día, opcional):** El número de líneas de código que la segunda persona puede escribir por día.
    *   **Fecha de Inicio:** La fecha en que comenzará el proyecto.
    *   **Fecha de Cierre Estimada:** La fecha en que te gustaría que terminara el proyecto.
3.  **Haz clic en "Calcular Estimación".**
4.  **Revisa los resultados:**
    *   La aplicación mostrará el total de días de trazabilidad, la fecha de cierre calculada, una validación de la fecha de cierre estimada y una fecha de cierre recomendada.
    *   En una sección separada, verás un diagrama de Gantt que visualiza el cronograma del proyecto, con una tarea para cada día de trabajo.
5.  **Exporta el diagrama de Gantt:**
    *   Puedes exportar el diagrama de Gantt a PDF o Excel haciendo clic en los botones correspondientes.

## Autor

*   **Miguel Jonathan Mogrovejo Cardenas**
