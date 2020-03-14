import React, { useState } from 'react';
import { TextField, InputAdornment, makeStyles, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import MoneyIcon from '@material-ui/icons/Money';
import { AddForm } from './components/AddForm';
import { ExpenseKind } from './expenseKind';
import { Expense } from './state/types';
import { useDispatch } from 'react-redux';
import { addExpense } from './state/actions';

const useStyles = makeStyles({
    formRow: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    formRowItem: {
        maxWidth: '49%',
    },
});

export const AddExpense: React.FC = () => {
    const classes = useStyles();

    const [formState, setFormState] = useState<Expense>({
        name: '',
        kind: ExpenseKind.SplitEqually,
        payload: 0,
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const fieldName = event.target.name;
        const fieldValue = event.target.value;

        switch (fieldName) {
            case 'name':
                setFormState(state => ({ ...state, name: fieldValue }));
                break;
            case 'kind':
                break;
            case 'payload':
                let payload = parseFloat(fieldValue);
                if (isNaN(payload)) {
                    payload = 0.0;
                }
                setFormState(state => ({ ...state, payload }));
                break;
            default:
                break;
        }
    };

    const handleSelectChange = (event: React.ChangeEvent<{ name?: string; value: unknown }>): void => {
        const value = event.target.value as ExpenseKind;
        setFormState(state => ({ ...state, kind: value }));
    };

    const dispatch = useDispatch();

    const handleSubmit = (): void => {
        dispatch(addExpense(formState));
        setFormState({
            name: '',
            kind: ExpenseKind.SplitEqually,
            payload: 0,
        });
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
                onChange={handleChange}
            />
            <div className={classes.formRow}>
                <FormControl margin="normal" fullWidth className={classes.formRowItem}>
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
                {formState.kind === ExpenseKind.Percentage ? (
                    <TextField
                        label="Percentage"
                        variant="outlined"
                        margin="normal"
                        name="payload"
                        fullWidth
                        InputProps={{
                            endAdornment: <InputAdornment position="end">%</InputAdornment>,
                        }}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        type="number"
                        inputProps={{
                            min: 0,
                            max: 100,
                        }}
                        value={formState.payload}
                        className={classes.formRowItem}
                        onChange={handleChange}
                    />
                ) : (
                    <TextField
                        label="Price"
                        variant="outlined"
                        margin="normal"
                        name="payload"
                        fullWidth
                        InputProps={{
                            startAdornment: <InputAdornment position="start">$</InputAdornment>,
                        }}
                        type="number"
                        value={formState.payload}
                        className={classes.formRowItem}
                        onChange={handleChange}
                    />
                )}
            </div>
        </AddForm>
    );
};
