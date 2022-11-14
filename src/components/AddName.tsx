import React, { useState } from 'react';
import { TextField } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import { AddForm } from './AddForm';
import { useDispatch } from 'react-redux';
import { addPerson, editPerson } from '../state/actions';
import { PriceInputField } from './PriceInputField';

interface PersonFormState {
    name: string;
    basePrice?: number;
}

interface InnerNameProps {
    title: string;
    editProps?: EditProps;
}

interface EditProps {
    editId: number;
    name: string;
    currentPrice: number;
    handleDidSubmit?(): void;
}

const InnerName: React.FC<InnerNameProps> = ({ title, editProps }) => {
    let basePrice = undefined;
    const currentPrice = editProps?.currentPrice;
    if (currentPrice) {
        basePrice = currentPrice / 100;
    }
    const [formState, setFormState] = useState<PersonFormState>({
        name: editProps?.name || '',
        basePrice,
    });

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const value = event.target.value;
        setFormState(state => ({ ...state, name: value }));
    };

    const dispatch = useDispatch();

    const handleSubmit = (): void => {
        if (formState.name !== '' && formState.basePrice && formState.basePrice > 0) {
            if (editProps) {
                dispatch(editPerson(editProps.editId, formState.basePrice));
            } else {
                dispatch(addPerson(formState.name, formState.basePrice));
            }
            setFormState({
                name: '',
                basePrice: undefined,
            });
            editProps?.handleDidSubmit && editProps.handleDidSubmit();
        }
    };

    return (
        <AddForm title={title} Icon={PersonIcon} handleSubmit={handleSubmit} edit={editProps !== undefined}>
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
    return <InnerName title="Add a new person" />;
};

export const EditName: React.FC<EditProps> = props => {
    return <InnerName title="Edit" editProps={props} />;
};
