<template>
  <div class="bg-gray-900 px-8 py-8 sm:px-12 lg:px-40">
    <section id="proyect-develop" class="mb-12">
      <h1 class="text-4xl font-bold text-vue-green mb-4 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mr-2" fill="none" viewBox="0 0 24 24"
             stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
        </svg>
        Desarrollo del Proyecto
      </h1>
      <p class="text-white text-lg mb-5">
        El siguiente proyecto fue desarrollado con el propósito de realizar un rápido cálculo para proyectar las
        ganancias futuras que podrías tener al aceptar un contrato de trabajo y los gastos que implicarían para la
        empresa.
      </p>
      <ul class="list-disc list-inside text-white text-lg space-y-2 mb-5">
        <li>Contempla ganancias futuras en un periódo de tiempo determinado.</li>
        <li>Contempla contratos con beneficios de ley y prestación de servicios en el Ecuador.</li>
        <li>Considera afiliación al seguro voluntaria.</li>
      </ul>
      <p class="text-white text-lg">
        Se ha desarrollado utilizando el Framework de Vue con Typescript para el aplicativo web y el Framework .Net Core
        8 con C#.
      </p>
      <p class="text-white text-lg">
        Para el despliegue del aplicativo se ha utilizado Integración Continua con GitHub Actions en los servidores de
        Azure.
      </p>
      <p class="text-white text-lg">
        Se ha desarrollado utilizando arquitecturas limpias (Arquitectura Hexagonal) para mantener un código limpio y mantenible
      </p>
    </section>

    <section class="mb-12">
      <h2 class="text-3xl font-semibold text-vue-green mb-6 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24"
             stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
        </svg>
        Ventajas y Beneficios
      </h2>
      <ul class="list-disc list-inside text-white text-lg space-y-2">
        <li>Interfáz Intutitiva y simple</li>
        <li>Brinda información clave para negociar un salario realista que se ajuste a tus expectativas económicas</li>
        <li>Herramienta para las finanzas personales que puede escalar en varios aspectos relacionados</li>
      </ul>
    </section>
    <section class="mb-12">
      <h2 class="text-3xl font-semibold text-vue-green mb-6 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24"
             stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"/>
        </svg>
        Arquitectura del Proyecto
      </h2>
      <div class="flex flex-col md:flex-row gap-8 items-center">
        <div class="flex-1">
          <p class="text-white text-lg mb-4">
            Se escogió una arquitectura serverless por todas las facilidades que nos brinda Azure para proteger nuestra aplicación y relativamente sin costo alguno para aplicaciones demo que no esperan un tráfico enorme de usuarios realizando peticiones constantemente.
          </p>
          <p class="text-white text-lg mb-4">Componentes utilizados</p>
          <ul class="list-disc list-inside text-white text-lg space-y-2">
            <li>Azure Function (Net Core 8) API que contiene la lógica de negocio</li>
            <li>Api Manager encargado de proteger el acceso a la API del proyecto, contiene las políticas de CORS, limite de peticiones, gestión de llamadas</li>
            <li>Github Actions, herramienta de GitHub para realizar integración continua en nuestros proyectos y ayudando a proteger variables de entorno api keys, secretos etc.</li>
            <li>Página Web Estática en Vue desplegada en Azure</li>
          </ul>
        </div>
        <div class="flex-1 flex justify-center bg-white">
          <img
              src="../assets/templates/arquitecturas.png"
              alt="Diagrama de arquitectura del proyecto"
              class="max-w-xs rounded-lg shadow-lg"
          >
        </div>
      </div>
    </section>
    <section class="flex flex-col sm:flex-row gap-4">
      <a href="https://github.com/Ariel-Marcelo/AzureSalaryCalculatorVue"
         class="bg-vue-green text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors text-center">
        Ver código en GitHub
      </a>
      <button
          @click="goToCalculator"
          class="bg-vue-blue text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors text-center"
      >
        Ir a la Calculadora
      </button>
    </section>
  </div>
</template>

<script setup lang="ts">
import {useRouter} from 'vue-router';

const router = useRouter();

const goToCalculator = () => router.push('/calculator');
</script>

<style>
.text-vue-green {
  color: #42b983;
}

.bg-vue-green {
  background-color: #42b983;
}

.bg-vue-blue {
  background-color: #35495e;
}
</style>