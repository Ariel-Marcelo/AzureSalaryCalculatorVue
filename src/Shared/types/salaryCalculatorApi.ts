export interface ApiRequest {
    salarySigned: number | null,
    salaryBonus: number | null,
    isDependencyContract: boolean,
    initDate: string,
    endDate: string,
    accumulatedBenefits: boolean,
    ivaIncluded: boolean,
    ieesSalary: number | null
    utilities: number | null,
    hasReserveFunds: boolean,
}

export interface ApiResponse {
    status: boolean
    data: SalaryEstimation
}

export interface ErrorApiResponse {
    status: boolean,
    code: number,
    message: string
    errors: []
}

export interface SalaryEstimation {
    enterpriseMonthAmount: number,
    liquidityMonthAmount: number,
    ieesSalary: number,
    startDate: string,
    finalDate: string | Date,
    enterpriseAmountInTime: number,
    liquidityAmountInTime: number,
    daysWorked: number,
    monthsWorked: number,
    yearsWorked: number,
    utilitiesPerMonth: number,
    utilitiesInTime: number,
    details: Array<Object>,
}