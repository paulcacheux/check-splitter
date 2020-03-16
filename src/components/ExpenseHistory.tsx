import React from 'react';
import { List, ListItem, ListItemText, Paper, makeStyles } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { State } from '../state/types';

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(2),
    },
}));

export const ExpenseHistory: React.FC = () => {
    const classes = useStyles();
    const expenses = useSelector((state: State) => state.expenses);

    if (expenses.length === 0) {
        return null;
    }

    return (
        <Paper className={classes.root} elevation={3}>
            <List>
                {expenses.map((expense, index) => {
                    return (
                        <ListItem key={index}>
                            <ListItemText>{expense.name}</ListItemText>
                        </ListItem>
                    );
                })}
            </List>
        </Paper>
    );
};
