# Salary Calculator EC

Este proyecto en **Vue.js** está diseñado para calcular rápidamente el salario neto de los trabajadores en Ecuador, teniendo en cuenta impuestos y otras deducciones. El cálculo se realiza a través de una API.

## Backend del Proyecto

El backend para este proyecto está disponible en el siguiente repositorio de GitHub:

[Backend - AzureSalaryCalculator](https://github.com/Ariel-Marcelo/AzureSalaryCalculator)

## Requisitos previos

Asegúrate de tener **Node.js** y **npm** instalados en tu entorno de desarrollo. Puedes descargarlos desde:

- [Node.js](https://nodejs.org)

## Configuración del Proyecto

1. Clona este repositorio en tu máquina local:

    ```sh
    git clone https://github.com/tu_usuario/salary-calculator-ec.git
    ```

2. Navega hasta el directorio del proyecto:

    ```sh
    cd salary-calculator-ec
    ```

3. Crea un archivo `.env` en la raíz del proyecto y agrega las siguientes variables de entorno con los valores correspondientes:

    ```env
    VITE_WS_SALARY_CALCULATOR=<URL_DE_LA_API_SALARY_CALCULATOR>
    VITE_KEY_SALARY_CALCULATOR=<TU_CLAVE_DE_API>
    ```

   **Nota**: Asegúrate de reemplazar `<URL_DE_LA_API_SALARY_CALCULATOR>` y `<TU_CLAVE_DE_API>` con los valores adecuados que te proporcionarán al momento de consumir la API.

## Instalación de Dependencias

Instala las dependencias necesarias ejecutando el siguiente comando:

```sh
npm install
```

## Construcción del Proyecto

Levantar en nuestro entorno local el proyecto:

```sh
npm run dev
```

Para crear una versión optimizada y lista para producción del proyecto, que puedas desplegar en cualquier servidor configurado para servir aplicaciones web (HTML, CSS, JS), ejecuta el siguiente comando:

```sh
npm run build
```