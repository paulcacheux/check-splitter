import React, { useState } from 'react';
import { TextField, InputAdornment } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import { AddForm } from './components/AddForm';
import { Person } from './state/types';
import { useDispatch } from 'react-redux';
import { addPerson } from './state/actions';

export const AddName: React.FC = () => {
    const [formState, setFormState] = useState<Person>({
        name: '',
        basePrice: 0,
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const fieldName = event.target.name;
        const fieldValue = event.target.value;
        switch (fieldName) {
            case 'name':
                setFormState(state => ({ ...state, name: fieldValue }));
                break;
            case 'basePrice':
                let basePrice = parseFloat(fieldValue);
                if (isNaN(basePrice)) {
                    basePrice = 0.0;
                }
                setFormState(state => ({ ...state, basePrice }));
                break;
            default:
                break;
        }
    };

    const dispatch = useDispatch();

    const handleSubmit = (): void => {
        dispatch(addPerson(formState));
        setFormState({
            name: '',
            basePrice: 0,
        });
    };

    return (
        <AddForm title="Add a new person" Icon={PersonIcon} handleSubmit={handleSubmit}>
            <TextField
                label="Name"
                variant="outlined"
                margin="normal"
                name="name"
                value={formState.name}
                fullWidth
                InputLabelProps={{
                    shrink: true,
                }}
                onChange={handleChange}
            />
            <TextField
                label="Base Price"
                variant="outlined"
                margin="normal"
                name="basePrice"
                value={formState.basePrice}
                fullWidth
                InputProps={{
                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                }}
                type="number"
                onChange={handleChange}
            />
        </AddForm>
    );
};
