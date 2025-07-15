<template>
  <div class="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto">
    <h2 class="text-xl font-semibold text-gray-800 mb-4 flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 text-vue-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      Resumen Financiero
    </h2>

    <div class="mb-4">
      <div class="flex items-center text-gray-600">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-vue-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        <span class="font-medium">Liquidez Mensual</span>
      </div>
      <p class="text-2xl font-bold text-gray-800">${{ salaryEstimation.liquidityMonthAmount }}</p>
    </div>

    <div class="mb-4">
      <div class="flex items-center text-gray-600">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-vue-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span class="font-medium">Gasto Mensual Empresa</span>
      </div>
      <p class="text-2xl font-bold text-gray-800">${{ salaryEstimation.enterpriseMonthAmount }}</p>
    </div>

    <div class="mb-4">
      <div class="flex items-center text-gray-600">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-vue-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span class="font-medium">Liquidez ({{ salaryEstimation.startDate }} - {{ salaryEstimation.finalDate }})</span>
      </div>
      <p class="text-2xl font-bold text-gray-800">${{ salaryEstimation.liquidityAmountInTime }}</p>
    </div>

    <div class="mb-4">
      <div class="flex items-center text-gray-600">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-vue-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span class="font-medium">Gasto Empresa ({{ salaryEstimation.startDate }} - {{ salaryEstimation.finalDate }})</span>
      </div>
      <p class="text-2xl font-bold text-gray-800">${{ salaryEstimation.enterpriseAmountInTime }}</p>
    </div>

    <div>
      <div class="flex items-center text-gray-600">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-vue-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        <span class="font-medium">Sueldo Declarado (IEES)</span>
      </div>
      <p class="text-2xl font-bold text-gray-800">${{ salaryEstimation.ieesSalary }}</p>
    </div>

    <div>
      <div class="flex items-center text-gray-600">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-vue-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        <span class="font-medium">Utilidades aproximadas mensuales (A partir de los 3 meses)</span>
      </div>
      <p class="text-2xl font-bold text-gray-800">±${{ salaryEstimation.utilitiesPerMonth }}</p>
    </div>

    <div>
      <div class="flex items-center text-gray-600">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-vue-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        <span class="font-medium">Utilidades aproximadas ({{ salaryEstimation.startDate }} - {{ salaryEstimation.finalDate }})</span>
      </div>
      <p class="text-2xl font-bold text-gray-800">±${{ salaryEstimation.utilitiesInTime }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type {SalaryEstimation} from "@/Shared/types/salaryCalculatorApi.ts";

const props = defineProps<{
  salaryEstimation: SalaryEstimation
}>()
</script>

<style scoped>
.text-vue-green {
  color: #42b983;
}

.text-vue-blue {
  color: #35495e;
}
</style>