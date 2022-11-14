import React, { useState } from 'react';
import { TextField, FormControl, InputLabel, Select, MenuItem, Grid, SelectChangeEvent } from '@mui/material';
import MoneyIcon from '@mui/icons-material/Money';
import { AddForm } from './AddForm';
import { ExpenseKind } from '../expenseKind';
import { useDispatch } from 'react-redux';
import { addExpense } from '../state/actions';
import { PriceInputField } from './PriceInputField';

const formRowItemLeft = {
    paddingRight: {
        sm: 1
    }
}

const formRowItemRight = {
    paddingLeft: {
        sm: 1
    }
}

interface ExpenseFormState {
    name: string;
    kind: ExpenseKind;
    payload?: number;
}

export const AddExpense: React.FC = () => {
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

    const handleSelectChange = (event: SelectChangeEvent<ExpenseKind>): void => {
        const value = event.target.value as ExpenseKind;
        setFormState(state => ({ ...state, kind: value }));
    }

    const dispatch = useDispatch();

    const handleSubmit = (): void => {
        if (formState.name !== '' && formState.payload && formState.payload) {
            dispatch(addExpense(formState.name, formState.kind, formState.payload));
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
                <Grid item xs={12} sm={6} sx={formRowItemLeft}>
                    <FormControl margin="normal" fullWidth>
                        <InputLabel id="kind-select-label" variant="outlined">
                            Kind
                        </InputLabel>
                        <Select
                            labelId="kind-select-label"
                            // labelWidth={40}
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
                <Grid item xs={12} sm={6} sx={formRowItemRight}>
                    <PriceInputField
                        label="Price"
                        name="price"
                        percentage={formState.kind === ExpenseKind.Percentage}
                        value={formState.payload}
                        handleChange={(price: number | undefined): void => {
                            setFormState(state => ({ ...state, payload: price }));
                        }}
                    />
                </Grid>
            </Grid>
        </AddForm>
    );
};
