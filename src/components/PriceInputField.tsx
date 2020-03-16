import React, { useState } from 'react';
import { TextField, InputAdornment } from '@material-ui/core';

export interface PriceInputProps {
    label: string;
    name: string;
    percentage?: boolean;
    handleChange(price: number | undefined): void;
}

export const PriceInputField: React.FC<PriceInputProps> = ({ label, name, percentage, handleChange }) => {
    const [payload, setPayload] = useState<number | undefined>(undefined);

    const innerHandleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        let payload: number | undefined = parseFloat(event.target.value);
        if (isNaN(payload)) {
            payload = undefined;
        }
        setPayload(payload);
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
                }}
                value={payload || ''}
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
                value={payload || ''}
                fullWidth
                InputProps={{
                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                }}
                type="number"
                onChange={innerHandleChange}
            />
        );
    }
};
