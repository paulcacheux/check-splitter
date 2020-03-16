import React, { useState } from 'react';
import { TextField, makeStyles, FormControl, InputLabel, Select, MenuItem, Grid } from '@material-ui/core';
import MoneyIcon from '@material-ui/icons/Money';
import { AddForm } from './components/AddForm';
import { ExpenseKind } from './expenseKind';
import { useDispatch } from 'react-redux';
import { addExpense } from './state/actions';
import { Expense } from './state/types';
import { PriceInputField } from './components/PriceInputField';

const useStyles = makeStyles(theme => ({
    formRow: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    formRowItemLeft: {
        [theme.breakpoints.up('sm')]: {
            paddingRight: theme.spacing(1),
        },
    },
    formRowItemRight: {
        [theme.breakpoints.up('sm')]: {
            paddingLeft: theme.spacing(1),
        },
    },
}));

interface ExpenseFormState {
    name: string;
    kind: ExpenseKind;
    payload?: number;
}

export const AddExpense: React.FC = () => {
    const classes = useStyles();

    const [formState, setFormState] = useState<ExpenseFormState>({
        name: '',
        kind: ExpenseKind.SplitEqually,
    });

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        if (event.target) {
            const value = event.target.value;
            setFormState(state => ({ ...state, name: value }));
        }
    };

    const handleSelectChange = (event: React.ChangeEvent<{ name?: string; value: unknown }>): void => {
        const value = event.target.value as ExpenseKind;
        setFormState(state => ({ ...state, kind: value }));
    };

    const dispatch = useDispatch();

    const handleSubmit = (): void => {
        if (formState.name !== '' && formState.payload && formState.payload > 0) {
            const expense: Expense = {
                name: formState.name,
                kind: formState.kind,
                payload: formState.payload,
            };
            dispatch(addExpense(expense));
            setFormState({
                name: '',
                kind: ExpenseKind.SplitEqually,
                payload: undefined,
            });
        }
    };

    return (
        <AddForm title="Add a new expense" Icon={MoneyIcon} handleSubmit={handleSubmit}>
            <TextField
                label="Name"
                name="name"
                variant="outlined"
                margin="normal"
                fullWidth
                InputLabelProps={{
                    shrink: true,
                }}
                value={formState.name}
                onChange={handleNameChange}
            />
            <Grid container>
                <Grid item xs={12} sm={6} className={classes.formRowItemLeft}>
                    <FormControl margin="normal" fullWidth>
                        <InputLabel id="kind-select-label" variant="outlined">
                            Kind
                        </InputLabel>
                        <Select
                            labelId="kind-select-label"
                            labelWidth={40}
                            fullWidth
                            value={formState.kind}
                            variant="outlined"
                            onChange={handleSelectChange}
                        >
                            <MenuItem value={ExpenseKind.Percentage}>Percentage</MenuItem>
                            <MenuItem value={ExpenseKind.SplitEqually}>Split equally</MenuItem>
                            <MenuItem value={ExpenseKind.SplitProportionally}>Split proportionally</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} className={classes.formRowItemRight}>
                    <PriceInputField
                        label="Price"
                        name="price"
                        percentage={formState.kind === ExpenseKind.Percentage}
                        handleChange={(price: number | undefined): void => {
                            setFormState(state => ({ ...state, payload: price }));
                        }}
                    />
                </Grid>
            </Grid>
        </AddForm>
    );
};
