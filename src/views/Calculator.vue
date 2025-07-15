<template>
  <div class="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-3xl mx-auto bg-gray-850 rounded-lg shadow-xl p-6">
      <div class="bg-gray-750 shadow-lg rounded-lg p-6 mb-4">
        <h1 class="text-center text-2xl font-bold text-vue-green mb-6">Calculadora de Salarios en Ecuador</h1>
        <form @submit.prevent="handleSubmit" class="space-y-6">
          <div class="flex flex-col gap-2 text-white">
            <span>Seleccione su tipo de contrato</span>
            <div id="button-group"
                 class="inline-flex rounded-md shadow-sm"
                 role="group">
              <button type="button"
                      :class="['btn-option px-4 py-2 text-sm font-medium border border-gray-300 text-gray-700 bg-white hover:bg-gray-100 rounded-l-md',
                          selected == 'benefit'
                          ? 'text-green-500'
                          : 'border-green-500'
                        ]"
                      @click="showBenefitContract()"
              >
                Beneficios de Ley
              </button>
              <button type="button"
                      :class="['btn-option px-4 py-2 text-sm font-medium border-t border-b border-gray-300 text-gray-700 bg-white hover:bg-gray-100 rounded-r-md',
                          selected == 'bill'
                          ? 'text-green-500'
                          : 'border-green-500'
                        ]"
                      @click="showBillContract()"
              >
                Bajo Facturación
              </button>
            </div>
          </div>
          <div class="space-y-4">
            <label v-if="formData.isDependencyContract" class="flex items-center space-x-3">
              <input
                  v-model="formData.hasReserveFunds"
                  type="checkbox"
                  class="form-checkbox h-5 w-5 text-vue-green"
              />
              <span class="text-gray-300">Incluir Fondos de Reserva</span>
            </label>
            <label v-if="!formData.isDependencyContract" class="flex items-center space-x-3">
              <input
                  v-model="formData.ivaIncluded"
                  type="checkbox"
                  class="form-checkbox h-5 w-5 text-vue-green"
              />
              <span class="text-gray-300">El salario acordado incluye IVA</span>
            </label>
            <label v-if="!formData.isDependencyContract" class="flex items-center space-x-3">
              <input
                  v-model="ieesVolunteer"
                  type="checkbox"
                  class="form-checkbox h-5 w-5 text-vue-green"
              />
              <span class="text-gray-300">Es afiliado voluntario al iees</span>
            </label>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label class="block text-gray-300 mb-2">Salario Acordado</label>
              <div class="relative">
                <input
                    type="number"
                    v-model="formData.salarySigned"
                    class="w-full bg-gray-700 text-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-vue-green pl-10 input-number"
                    step="0.01"
                    min="0"
                />
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span class="text-gray-400">$</span>
                </div>
              </div>
              <div class="text-sm text-gray-400 mt-1">
                USD: {{ displaySalarySigned }}
              </div>
            </div>
            <div v-if="formData.isDependencyContract">
              <label class="block text-gray-300 mb-2">Bonos adicionales (mensuales)</label>
              <div class="relative">
                <input
                    type="number"
                    v-model="formData.salaryBonus"
                    class="w-full bg-gray-700 text-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-vue-green pl-10 input-number"
                    step="0.01"
                    min="0"
                />
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span class="text-gray-400">$</span>
                </div>
              </div>
              <div class="text-sm text-gray-400 mt-1">
                USD: {{ displaySalaryBonus }}
              </div>
            </div>
            <div>
              <label class="block text-gray-300 mb-2">Fecha de entrada</label>
              <input
                  type="date"
                  v-model="formData.initDate"
                  class="w-full bg-gray-700 text-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-vue-green"
              />
            </div>
            <div>
              <label class="block text-gray-300 mb-2">Fecha de Salida</label>
              <input
                  type="date"
                  v-model="formData.endDate"
                  class="w-full bg-gray-700 text-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-vue-green"
              />
            </div>
            <div>
              <label class="block text-gray-300 mb-2">Salario registrado en el IEES</label>
              <div class="relative">
                <input
                    type="number"
                    v-model="formData.ieesSalary"
                    class="w-full bg-gray-700 text-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-vue-green pl-10 input-number"
                    step="0.01"
                    min="0"
                    :disabled="formData.isDependencyContract || !ieesVolunteer"
                />
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span class="text-gray-400">$</span>
                </div>
              </div>
              <div class="text-sm text-gray-400 mt-1">
                USD: {{ displayIeesSalary }}
              </div>
            </div>
            <div v-if="formData.isDependencyContract">
              <label class="block text-gray-300 mb-2">Utilidades anuales estimadas</label>
              <div class="relative">
                <input
                    type="number"
                    v-model="formData.utilities"
                    class="w-full bg-gray-700 text-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-vue-green pl-10 input-number"
                    step="0.01"
                    min="0"
                />
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span class="text-gray-400">$</span>
                </div>
              </div>
              <div class="text-sm text-gray-400 mt-1">
                USD: {{ displayUtilities }}
              </div>
            </div>
          </div>
          <div class="space-y-4">
            <label v-if="formData.isDependencyContract" class="flex items-center space-x-3">
              <input
                  type="checkbox"
                  v-model="formData.accumulatedBenefits"
                  class="form-checkbox h-5 w-5 text-vue-green"
              />
              <span class="text-gray-300">¿Acumulará sus beneficios de ley para que se cancelen en los meses designados por la ley Ecuatoriana?</span>
            </label>

          </div>
          <div v-if="error" class="text-red-500 text-sm">{{ error }}</div>
          <div v-if="success" class="text-vue-green text-sm">Form submitted successfully!</div>
          <button
              type="submit"
              :disabled="loading"
              class="w-full bg-vue-green hover:bg-vue-green/90 text-white font-bold py-2 px-4 rounded-md transition-colors"
          >
            {{ loading ? 'Calculando...' : 'Calcular' }}
          </button>
        </form>
      </div>

      <div v-if="formStore.responses.length > 0" class="space-y-4">
        <div class="flex justify-between items-center">
          <h3 class="text-xl font-semibold text-white mb-4">Previous Responses</h3>
          <button
              type="button"
              @click="formStore.clearAll"
              class="text-gray-600 hover:text-white"
          >
            Clear All Results
          </button>
        </div>
        <div v-for="(response) in formStore.responses" class="bg-vue-dark hover:bg-vue-green/90 text-white shadow-md rounded-lg">
          <details class="p-4">
            <summary class="cursor-pointer font-medium ">
              Liquidez Mensual : {{response.liquidityMonthAmount}}
            </summary>
            <FinancialCard
                class="mt-2"
                :salary-estimation="response"
            />
          </details>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useFormStore} from "@/stores/formStore.ts";
import {computed, reactive, ref, watch} from "vue";
import type {ApiRequest} from "@/Shared/types/salaryCalculatorApi.ts";
import { swalError } from "@/Shared/swalAlert.ts"
import FinancialCard from "@/components/FinancialCard.vue";
const formStore = useFormStore()

const selected = ref('bill')
const ieesVolunteer = ref(false)

const formData = reactive<ApiRequest>({
  salarySigned: null,
  salaryBonus: null,
  isDependencyContract: false,
  initDate: "",
  endDate: "",
  accumulatedBenefits: false,
  ivaIncluded: false,
  ieesSalary: null,
  utilities: null,
  hasReserveFunds: false
})

watch(() => formData.salarySigned, (newVal) => {
  if(newVal && (ieesVolunteer.value || formData.isDependencyContract)) {
    formData.ieesSalary = newVal;
  }
})

const isSubmitting = ref(false)
const error = ref('')

const formatCurrency = (value: number | null): string => {

  if (value === null) {
    value = 0
  }
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(value);
};


const handleSubmit = async () => {
  try {
    isSubmitting.value = true
    error.value = ''
    await formStore.submitForm(formData)
    clearForm()
  } catch (e: unknown) {
    if (e instanceof Error) {
      swalError(e.message);
    } else {
      swalError("Error inesperado al enviar el formulario Salario")
    }
    error.value = 'An error occurred while submitting the form'
  } finally {
    isSubmitting.value = false
  }
}

const clearForm = () => {
  formData.salaryBonus = null
  formData.salarySigned = null
  formData.ieesSalary = null
  formData.initDate = ""
  formData.endDate = ""
  formData.ivaIncluded = false
  formData.accumulatedBenefits = false
  formData.utilities = null
  ieesVolunteer.value = false
}

const displaySalarySigned = computed(() => formatCurrency(formData.salarySigned?? 0));
const displaySalaryBonus = computed(() => formatCurrency(formData.salaryBonus ?? 0));
const displayIeesSalary = computed(() => formatCurrency(formData.ieesSalary ?? 0));
const displayUtilities = computed(() => formatCurrency(formData.utilities ?? 0));

const loading = ref(false);
const success = ref(false);

const showBenefitContract = () => {
  selected.value = 'benefit'
  formData.isDependencyContract = true;
}

const showBillContract = () => {
  selected.value = 'bill'
  formData.isDependencyContract = false;
}
</script>