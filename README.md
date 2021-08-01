# Configuración base para Webpack

La configuración utiliza Babel para que JavaScript sean entendido por todos los navegadores, además de optimizaciones como la minificación de código en los archivos .js, .css y .html. Permite utilizar el preprocesador SASS, variables de entorno, alias y reducción del tamaño de las imágenes para producción.

Utilizando la API de [Rick and Morty](https://rickandmortyapi.com/) para mostrar un personaje aleatoriamente.

## Para analizar nuestro proyecto con Webpack Bundle Plugin

Crear el archivo del estado de nuestra app:

```
npx webpack --profile --json > stats.json
```

Analaizar el json generado:

```
npx webpack-bundle-analyzer stats.json
```
