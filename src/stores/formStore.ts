import {defineStore} from "pinia";
import {ref} from "vue";
import type {ApiRequest, SalaryEstimation} from "@/Shared/types/salaryCalculatorApi.ts";
import {calculateSalary} from "@/services/salaryCalculatorService"

export const useFormStore = defineStore('form', () => {
    const responses = ref<SalaryEstimation[]>([])

    const submitForm = async (formData: ApiRequest) => {
        const response = await calculateSalary(formData)
        responses.value.unshift(response);
    }

    const clearAll = () => {
        responses.value = []
    }

    return {
        responses,
        submitForm,
        clearAll
    }

})