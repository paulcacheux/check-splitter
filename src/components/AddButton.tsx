import React from 'react';
import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

export const AddButton: React.FC = () => {
    return (
        <Button color="primary" variant="contained" size="large" type="submit" startIcon={<AddIcon />}>
            Add
        </Button>
    );
};
