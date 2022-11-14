import React from 'react';
import {
    List,
    ListItem,
    ListItemText,
    Paper,
    ListItemSecondaryAction,
    IconButton,
} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { Expense } from '../state/types';
import { ExpenseKind, expenseKindToString } from '../expenseKind';
import DeleteIcon from '@mui/icons-material/Delete';
import { expensesSelector } from '../state/selectors';
import { removeExpense } from '../state/actions';

const formatExpensePayload = (kind: ExpenseKind, payload: number): string => {
    if (kind === ExpenseKind.Percentage) {
        return `${payload}%`;
    } else {
        const dollars = (Math.abs(payload) / 100).toFixed(2);
        if (payload >= 0) {
            return `$${dollars}`;
        } else {
            return `-$${dollars}`;
        }
    }
};

const ExpenseHistoryItem: React.FC<{ expense: Expense }> = ({ expense }) => {
    const primaryText = `${expense.name}: ${formatExpensePayload(expense.kind, expense.payload)}`;

    const dispatch = useDispatch();

    const handleClick = (): void => {
        dispatch(removeExpense(expense.id));
    };

    return (
        <ListItem>
            <ListItemText primary={primaryText} secondary={expenseKindToString(expense.kind)} />
            <ListItemSecondaryAction>
                <IconButton edge="end" onClick={handleClick}>
                    <DeleteIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    );
};

export const ExpenseHistory: React.FC = () => {
    const expenses = useSelector(expensesSelector);

    if (expenses.length === 0) {
        return null;
    }

    return (
        <Paper sx={{marginTop: 2}} elevation={3}>
            <List>
                {expenses.map(expense => {
                    return <ExpenseHistoryItem expense={expense} key={expense.id} />;
                })}
            </List>
        </Paper>
    );
};
