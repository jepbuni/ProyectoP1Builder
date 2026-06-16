# Patrón Builder - Survey Builder

# Problema a resolver

El problema es la creación de encuestas de satisfacción para distintos eventos de manera flexible y organizada.

Cada encuesta puede tener diferentes configuraciones dependiendo del evento, las preguntas o las opciones que se quieran agregar.  
El patrón Builder permite construir la encuesta paso a paso mediante métodos encadenables, haciendo el código más limpio y fácil de mantener.

---

# Estructura de clases

## Survey

Se encarga de representar la encuesta final.

Contiene:
- título de la encuesta
- nombre del evento
- preguntas
- modo anónimo
- puntuación máxima
- fecha de expiración

También incluye el método:
displaySurvey()

# Nombre de estudiante

- Joe Enrique Panday Barreto