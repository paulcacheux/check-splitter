import React from 'react';
import {
    Paper,
    Table,
    TableContainer,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    makeStyles,
    withStyles,
    createStyles,
} from '@material-ui/core';
import { useSelector } from 'react-redux';
import { computeExpenses } from '../model/calculator';
import { peopleSelector, expensesSelector } from '../state/selectors';

interface Row {
    name: string;
    basePrice: number;
    tip: number;
}

const StyledTableCell = withStyles(theme => {
    return createStyles({
        head: {
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.common.white,
        },
    });
})(TableCell);

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        marginBottom: theme.spacing(2),
    },
    table: {
        maxHeight: '50vh',
    },
}));

export const CheckTable: React.FC = () => {
    const classes = useStyles();

    const people = useSelector(peopleSelector);
    const expenses = useSelector(expensesSelector);

    const peopleWithExpenses = computeExpenses(people, expenses);

    return (
        <Paper className={classes.root} elevation={3}>
            <TableContainer className={classes.table}>
                <Table stickyHeader>
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="left">Name</StyledTableCell>
                            <StyledTableCell align="right">Base Price</StyledTableCell>
                            {expenses.map((expense, index) => {
                                return (
                                    <StyledTableCell align="right" key={index}>
                                        {expense.name}
                                    </StyledTableCell>
                                );
                            })}
                            <StyledTableCell align="right">Total</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {peopleWithExpenses.map((person, index) => {
                            return (
                                <TableRow key={index}>
                                    <TableCell align="left">{person.person.name}</TableCell>
                                    <TableCell align="right">{person.person.basePrice.toFixed(2)}</TableCell>
                                    {person.expenses.map((expense, index) => {
                                        return (
                                            <TableCell align="right" key={index}>
                                                {expense.toFixed(2)}
                                            </TableCell>
                                        );
                                    })}
                                    <TableCell align="right">{person.total.toFixed(2)}</TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
};