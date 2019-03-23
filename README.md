# Reminders

Es una aplicación web que fue hecha para el proceso de postulación para trabajar en la empresa Papinotas.

La aplicación consiste poder crear recordatorios, con un título y fecha, que también pueden ser marcados como completados.

## Funcionamiento

Se encuentran 2 carpetas: ```reminders_api``` y ```reminders_app```, siendo la primera el backend y la segunda el frontend.
Para haver funcionar la aplicación se debe entrar a la carpeta reminders_api e introducir el comando

```rails s -p 4000```

Luego, entrar a la carpeta ```reminders_app``` y ejecutar

```npm start```

La aplicación se despliega en http://localhost:3000

## Limitaciones

Se montó la aplicación con los requerimientos básicos: backend en rails con graphql y frontend en react con Apollo client.

Se pueden crear y eliminar recordatorios, también se pueden marcar como completados, pero no se refleja enseguida en la interfaz (el cambio si se refleja en la base de datos) por un error que tiene que ver con los tipos y probablemente por anidar 2 mutaciones, que fue algo que tuve que hacer y no estoy seguro de cuales son las limitaciones de dicha anidación. No pude solucionarlo.
Fuera de eso (y de que pudo ser muuucho más bonita la página) funciona bien.
