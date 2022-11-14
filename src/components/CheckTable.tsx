import React, { useState } from 'react';
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
    TableFooter,
    IconButton,
} from '@mui/material';
import { useSelector } from 'react-redux';
import { computeExpenses } from '../model/calculator';
import { peopleSelector, expensesSelector } from '../state/selectors';
import EditIcon from '@mui/icons-material/Edit';
import { EditName } from './AddName';

const StyledTableCell = withStyles(theme => {
    return createStyles({
        head: {
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.common.white,
            fontWeight: 'bold',
        },
        footer: {
            color: theme.palette.primary.main,
            fontWeight: 'bold',
            fontSize: '1.1em',
        },
    });
})(TableCell);

const numberDisplay = (value: number): string => {
    return (value / 100).toFixed(2);
};

export const CheckTable: React.FC = () => {
    const [currentEdit, setCurrentEdit] = useState<number | null>(null);

    const people = useSelector(peopleSelector);
    const expenses = useSelector(expensesSelector);

    const peopleWithExpenses = computeExpenses(people, expenses);
    const total = peopleWithExpenses.map(people => people.total).reduce((a, b) => a + b, 0);

    const setCurrentEditOrReset = (index: number): void => {
        if (index === null || currentEdit === index) {
            setCurrentEdit(null);
        } else {
            setCurrentEdit(index);
        }
    };

    return (
        <Paper sx={{width: '100vw', marginBottom: 2}} elevation={3}>
            <TableContainer sx={{maxHeight: '50vh'}}>
                <Table stickyHeader>
                    <TableHead>
                        <TableRow>
                            <StyledTableCell></StyledTableCell>
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
                            const editRow = (
                                <TableRow>
                                    <TableCell colSpan={4 + person.expenses.length}>
                                        <EditName
                                            editId={index}
                                            name={person.person.name}
                                            currentPrice={person.person.basePrice}
                                            handleDidSubmit={(): void => setCurrentEdit(null)}
                                        ></EditName>
                                    </TableCell>
                                </TableRow>
                            );
                            return (
                                <React.Fragment key={index}>
                                    <TableRow>
                                        <TableCell padding="checkbox">
                                            <IconButton
                                                edge="end"
                                                size="small"
                                                onClick={(): void => setCurrentEditOrReset(index)}
                                            >
                                                <EditIcon />
                                            </IconButton>
                                        </TableCell>
                                        <TableCell align="left">{person.person.name}</TableCell>
                                        <TableCell align="right">{numberDisplay(person.person.basePrice)}</TableCell>
                                        {person.expenses.map((expense, index) => {
                                            return (
                                                <TableCell align="right" key={index}>
                                                    {numberDisplay(expense)}
                                                </TableCell>
                                            );
                                        })}
                                        <TableCell align="right">{numberDisplay(person.total)}</TableCell>
                                    </TableRow>
                                    {currentEdit === index && editRow}
                                </React.Fragment>
                            );
                        })}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <StyledTableCell></StyledTableCell>
                            <StyledTableCell align="left">Total</StyledTableCell>
                            <StyledTableCell align="right" colSpan={expenses.length + 2}>
                                {numberDisplay(total)}
                            </StyledTableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            </TableContainer>
        </Paper>
    );
};
