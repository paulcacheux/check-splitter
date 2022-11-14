import React from 'react';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';

export const FormButton: React.FC<{ edit: boolean }> = ({ edit }) => {
    if (edit) {
        return (
            <Button color="primary" variant="contained" size="large" type="submit" startIcon={<EditIcon />}>
                Edit
            </Button>
        );
    } else {
        return (
            <Button color="primary" variant="contained" size="large" type="submit" startIcon={<AddIcon />}>
                Add
            </Button>
        );
    }
};
