import type {ApiRequest, ErrorApiResponse, SalaryEstimation} from "@/Shared/types/salaryCalculatorApi.ts";
import wsSalaryCalculator from "@/services/interceptors/wsSalaryCalculator.ts";
import axios from "axios";

export const calculateSalary = async (apiRequest: ApiRequest): Promise<SalaryEstimation> => {
    try {
        const response = await wsSalaryCalculator.post("/salary", apiRequest);
        return response.data.data;
    } catch (error: unknown) {
        throw handleError(error);
    }
}

const handleError = (error: unknown): Error => {

    if (axios.isAxiosError(error)) {
        if (error.response) {
            const errorData = (error.response.data as ErrorApiResponse);
            let serverMessage = errorData.message || 'Error en la respuesta del servidor'
            errorData.errors.forEach(errorMessage =>
                serverMessage += ", " +  errorMessage
            )
            return  new Error(serverMessage);
        } else if (error.request) {
            return new Error('No se recibió respuesta del servidor.');
        } else {
            return new Error(error.message);
        }
    } else {
        return new Error('Ocurrió un error desconocido.');
    }
}