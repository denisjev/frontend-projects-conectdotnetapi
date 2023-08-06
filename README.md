# Ejercicio 5 (Aplicación React conectándose con la API de .NET)

Esta es una versión modificada del ejercicio 1, acá se modifico un poco el código para permitir comunicación con la API creada en el ejercicio 3.

## Ejecución de la aplicación

Para probar la aplicación se deberán ejecutar los siguientes comandos desde la terminal, hubicados en la carpeta del proyecto.

```
npm install
npm run dev
```

Así mismo, se debe tener la API en ejecución. De no estarlo debe dirirse a la carpeta de la solución ejecutar los siguientes comandos.

```
dotnet build
dotnet run
```

Luego acceder desde el navegador a la URL que muestra la salida del comando anterior. 

Nota: La URL a la cual la API se conecta se encuetra en el archivo src/app.config.ts