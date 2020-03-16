import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import { AddForm } from './components/AddForm';
import { Person } from './state/types';
import { useDispatch } from 'react-redux';
import { addPerson } from './state/actions';
import { PriceInputField } from './components/PriceInputField';

interface PersonFormState {
    name: string;
    basePrice?: number;
}

export const AddName: React.FC = () => {
    const [formState, setFormState] = useState<PersonFormState>({ name: '' });

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const value = event.target.value;
        setFormState(state => ({ ...state, name: value }));
    };

    const dispatch = useDispatch();

    const handleSubmit = (): void => {
        if (formState.name !== '' && formState.basePrice && formState.basePrice > 0) {
            const person: Person = {
                name: formState.name,
                basePrice: formState.basePrice,
            };
            dispatch(addPerson(person));
            setFormState({
                name: '',
                basePrice: undefined,
            });
        }
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
                onChange={handleNameChange}
            />
            <PriceInputField
                label="Base Price"
                name="basePrice"
                handleChange={(price: number | undefined): void => {
                    setFormState(state => ({ ...state, basePrice: price }));
                }}
            />
        </AddForm>
    );
};
