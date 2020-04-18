import { Person, Expense } from '../state/types';
import { ExpenseKind } from '../expenseKind';

const equilibrate = (prices: Array<number>, targetPrice: number): Array<number> => {
    const res = prices.map(p => Math.floor(p));

    const currentPrice = res.reduce((curr, v) => curr + v, 0);
    const neededCents = targetPrice - currentPrice;

    for (let i = 0; i < neededCents; i++) {
        res[i] += 1;
    }

    return res;
};

export class PersonWithExpenses {
    person: Person;
    expenses: Array<number>;
    total: number;

    constructor(person: Person) {
        this.person = person;
        this.expenses = [];
        this.total = 0.0;
    }

    getCurrentTotalPrice(): number {
        return this.person.basePrice + this.expenses.reduce((a, b) => a + b, 0);
    }

    addExpense(expense: number): void {
        this.expenses.push(expense);
    }

    finalize(): void {
        this.total = this.getCurrentTotalPrice();
    }
}

export const computeExpenses = (people: Array<Person>, expenses: Array<Expense>): Array<PersonWithExpenses> => {
    const peopleCount = people.length;
    const totalBasePrice = people.map(person => person.basePrice).reduce((a, b) => a + b, 0);

    const peopleWithExpenses = people.map(person => {
        return new PersonWithExpenses(person);
    });

    for (const expense of expenses) {
        let prices;
        switch (expense.kind) {
            case ExpenseKind.Percentage:
                prices = peopleWithExpenses.map(person => {
                    return (expense.payload * person.getCurrentTotalPrice()) / 100;
                });
                break;
            case ExpenseKind.SplitEqually:
                prices = Array.from({ length: peopleCount }, () => expense.payload / peopleCount);
                break;
            case ExpenseKind.SplitProportionally:
                prices = peopleWithExpenses.map(person => {
                    const percent = person.person.basePrice / totalBasePrice;
                    return percent * expense.payload;
                });
                break;
        }

        const finalPrices = equilibrate(prices, expense.payload);

        peopleWithExpenses.forEach((person, index) => {
            person.addExpense(finalPrices[index]);
        });
    }

    peopleWithExpenses.forEach(person => person.finalize());
    return peopleWithExpenses;
};
