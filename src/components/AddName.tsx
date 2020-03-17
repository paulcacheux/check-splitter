import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import { AddForm } from './AddForm';
import { useDispatch } from 'react-redux';
import { addPerson } from '../state/actions';
import { PriceInputField } from './PriceInputField';

interface PersonFormState {
    name: string;
    basePrice?: number;
}

interface NameEditProps {
    title: string;
    editId?: number;
}

const NameEdit: React.FC<NameEditProps> = ({ title, editId }) => {
    const [formState, setFormState] = useState<PersonFormState>({ name: '' });

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const value = event.target.value;
        setFormState(state => ({ ...state, name: value }));
    };

    const dispatch = useDispatch();

    const handleSubmit = (): void => {
        if (formState.name !== '' && formState.basePrice && formState.basePrice > 0) {
            if (editId) {
                console.log('Edit dispatch: ' + editId);
            } else {
                dispatch(addPerson(formState.name, formState.basePrice));
            }
            setFormState({
                name: '',
                basePrice: undefined,
            });
        }
    };

    return (
        <AddForm title={title} Icon={PersonIcon} handleSubmit={handleSubmit}>
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
                value={formState.basePrice}
                handleChange={(price: number | undefined): void => {
                    setFormState(state => ({ ...state, basePrice: price }));
                }}
            />
        </AddForm>
    );
};

export const AddName: React.FC = () => {
    return <NameEdit title="Add a new person" />;
};
