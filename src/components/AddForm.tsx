import React from 'react';
import { makeStyles, Paper, Typography, SvgIconProps } from '@material-ui/core';
import { FormButton } from './FormButton';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(2),
    },
    headerIcon: {
        marginRight: theme.spacing(1),
    },
    header: {
        display: 'flex',
        alignItems: 'center',
    },
}));

interface AddFormProps {
    title: string;
    edit?: boolean;
    Icon(props: SvgIconProps): JSX.Element;
    handleSubmit?(event: React.FormEvent<HTMLFormElement>): void;
}

export const AddForm: React.FC<AddFormProps> = ({ title, edit, Icon, handleSubmit, children }) => {
    const finalEdit = edit === true;
    const classes = useStyles();
    const preventAndHandleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        if (handleSubmit) {
            handleSubmit(event);
        }
    };

    return (
        <Paper elevation={3} className={classes.root}>
            <div className={classes.header}>
                <Icon fontSize="large" className={classes.headerIcon} />
                <Typography variant="h5">{title}</Typography>
            </div>
            <form onSubmit={preventAndHandleSubmit}>
                {children}
                <FormButton edit={finalEdit} />
            </form>
        </Paper>
    );
};
