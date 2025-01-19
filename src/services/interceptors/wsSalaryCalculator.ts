import axios from "axios";

const wsSalaryCalculator = axios.create({
    baseURL: import.meta.env.VITE_WS_SALARY_CALCULATOR,
    headers: {
        'Content-Type': 'application/json'
    }
});

wsSalaryCalculator.interceptors.request.use((config) => {
    config.headers['Ocp-Apim-Subscription-Key'] = import.meta.env.VITE_KEY_SALARY_CALCULATOR;
    return config;
});

export default wsSalaryCalculator;