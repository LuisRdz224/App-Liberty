export interface Debt {
    id: number;
    entityId: string;
    movement: string;
    status: string;
    name: string;
    seniority: number;
    dueDays: number;
    amount: number;
}

export interface DebtsData {
    totalDebt: number;
    onTimeDebt: number;
    overdueDebt: number;
    data: Debt[];
}

export interface ResponseData {
    debts: DebtsData;
}
