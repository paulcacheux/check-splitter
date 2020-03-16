export enum ExpenseKind {
    Percentage,
    SplitEqually,
    SplitProportionally,
}

export function expenseKindToString(kind: ExpenseKind): string {
    switch (kind) {
        case ExpenseKind.Percentage:
            return 'Percentage';
        case ExpenseKind.SplitEqually:
            return 'Split Equally';
        case ExpenseKind.SplitProportionally:
            return 'Split Proportionally';
    }
}
