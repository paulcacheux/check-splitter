import React, { ComponentType } from 'react';
import { Paper, Typography, SvgIconProps } from '@mui/material';
import { FormButton } from './FormButton';

interface AddFormProps {
    title: string;
    edit?: boolean;
    Icon: ComponentType<SvgIconProps>;
    handleSubmit?(event: React.FormEvent<HTMLFormElement>): void;
    children?: React.ReactNode;
}

export const AddForm: React.FC<AddFormProps> = ({ title, edit, Icon, handleSubmit, children }) => {
    const finalEdit = edit === true;
    const preventAndHandleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        if (handleSubmit) {
            handleSubmit(event);
        }
    };

    return (
        <Paper elevation={3} sx={{ padding: 2 }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Icon fontSize="large" sx={{ marginRight: 1 }} />
                <Typography variant="h5">{title}</Typography>
            </div>
            <form onSubmit={preventAndHandleSubmit}>
                {children}
                <FormButton edit={finalEdit} />
            </form>
        </Paper>
    );
};
