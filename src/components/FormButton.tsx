import React from 'react';
import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';

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
