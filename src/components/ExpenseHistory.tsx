import React from 'react';
import {
    List,
    ListItem,
    ListItemText,
    Paper,
    makeStyles,
    ListItemSecondaryAction,
    IconButton,
} from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { Expense } from '../state/types';
import { ExpenseKind, expenseKindToString } from '../expenseKind';
import DeleteIcon from '@material-ui/icons/Delete';
import { expensesSelector } from '../state/selectors';
import { removeExpense } from '../state/actions';

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(2),
    },
}));

const ExpenseHistoryItem: React.FC<{ expense: Expense }> = ({ expense }) => {
    const payloadFormatted = expense.kind === ExpenseKind.Percentage ? `${expense.payload}%` : `$${expense.payload}`;
    const primaryText = `${expense.name} - ${payloadFormatted}`;

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
    const classes = useStyles();
    const expenses = useSelector(expensesSelector);

    if (expenses.length === 0) {
        return null;
    }

    return (
        <Paper className={classes.root} elevation={3}>
            <List>
                {expenses.map((expense, index) => {
                    return <ExpenseHistoryItem expense={expense} key={index} />;
                })}
            </List>
        </Paper>
    );
};
