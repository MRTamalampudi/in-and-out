import BudgetItem from "./budget-item.model";

class Budget {
    id: number;
    budget: string;
    description: string;
    items: BudgetItem[];
}

export default Budget;