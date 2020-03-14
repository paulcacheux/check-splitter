import { Person, Expense } from '../state/types';
import { ExpenseKind } from '../expenseKind';

export class PersonWithExpenses {
    person: Person;
    expenses: Array<number>;
    total: number;

    constructor(person: Person) {
        this.person = person;
        this.expenses = [];
        this.total = 0.0;
    }

    addExpense(payload: number, kind: ExpenseKind, peopleCount: number, totalPrice: number): void {
        switch (kind) {
            case ExpenseKind.Percentage:
                this.expenses.push((payload * this.person.basePrice) / 100);
                break;
            case ExpenseKind.SplitEqually:
                this.expenses.push(payload / peopleCount);
                break;
            case ExpenseKind.SplitProportionally:
                const percent = this.person.basePrice / totalPrice;
                this.expenses.push(percent * payload);
                break;
        }
    }

    finalize(): void {
        this.total = this.person.basePrice + this.expenses.reduce((a, b) => a + b, 0);
    }
}

export const computeExpenses = (people: Array<Person>, expenses: Array<Expense>): Array<PersonWithExpenses> => {
    const peopleCount = people.length;
    const totalPrice = people.map(person => person.basePrice).reduce((a, b) => a + b, 0);
    return people.map(person => {
        const personWithExpenses = new PersonWithExpenses(person);
        for (const expense of expenses) {
            personWithExpenses.addExpense(expense.payload, expense.kind, peopleCount, totalPrice);
        }
        personWithExpenses.finalize();
        return personWithExpenses;
    });
};
