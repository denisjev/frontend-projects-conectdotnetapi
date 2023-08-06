# Ejercicio 5 (Aplicación React conectándose con la API de .NET)

Esta es una versión modificada del ejercicio 1, acá se modifico un poco el código para permitir comunicación con la API creada en el ejercicio 3.

## Ejecución de la API

Para poder probar la aplicación React, se debe tener la API en ejecución. Para ello se deben ejecutar los siguientes comandos desde la terminal, hubicados dentro de la carpeta Api de la solución.

```
dotnet build
dotnet run
```

## Ejecución de la aplicación React

Para probar la aplicación React se deberán ejecutar los siguientes comandos desde la terminal, hubicados en la carpeta del proyecto.

```
npm install
npm run dev
```

Luego acceder desde el navegador a la URL que muestra la salida del comando anterior. 

Nota: La URL a la cual la API se conecta se encuetra en el archivo src/app.config.ts