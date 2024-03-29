import React from 'react';
import { TextField, InputAdornment } from '@mui/material';

export interface PriceInputProps {
    label: string;
    name: string;
    percentage?: boolean;
    value?: number;
    handleChange(price: number | undefined): void;
}

export const PriceInputField: React.FC<PriceInputProps> = ({ label, name, percentage, value, handleChange }) => {
    const innerHandleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        let payload: number | undefined = parseFloat(event.target.value);
        if (isNaN(payload)) {
            payload = undefined;
        }
        handleChange(payload);
    };

    if (percentage) {
        return (
            <TextField
                label={label}
                variant="outlined"
                margin="normal"
                name={name}
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
                    step: 0.01,
                }}
                value={value || ''}
                onChange={innerHandleChange}
            />
        );
    } else {
        return (
            <TextField
                label={label}
                variant="outlined"
                margin="normal"
                name={name}
                value={value || ''}
                fullWidth
                InputProps={{
                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                }}
                inputProps={{
                    step: 0.01,
                }}
                type="number"
                onChange={innerHandleChange}
            />
        );
    }
};
