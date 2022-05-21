import React, { useState } from 'react';
import {
    Paper,
    makeStyles,
    Typography,
    Button,
    FormControl,
    InputLabel,
    OutlinedInput,
    InputAdornment,
} from '@material-ui/core';
import DialPadIcon from '@material-ui/icons/Dialpad';
import { evaluate } from '../maths/parser';
import { Alert } from '@material-ui/lab';

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(2),
        padding: theme.spacing(2),
    },
    headerIcon: {
        marginRight: theme.spacing(1),
    },
    header: {
        display: 'flex',
        alignItems: 'center',
    },
    alert: {
        marginTop: theme.spacing(1),
    },
    result: {
        padding: theme.spacing(1),
        backgroundColor: '#f5f5f5',
    },
}));

export const Calculator: React.FC = () => {
    const classes = useStyles();
    const [content, setContent] = useState('');
    const [result, setResult] = useState<number | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        try {
            const value = evaluate(content);
            setResult(value);
        } catch (err: any) {
            setError(err.message || err.toString());
        }
    };

    return (
        <Paper className={classes.root} elevation={3}>
            <div className={classes.header}>
                <DialPadIcon fontSize="large" className={classes.headerIcon} />
                <Typography variant="h5">Calculator</Typography>
            </div>
            {error && (
                <Alert severity="error" className={classes.alert}>
                    {error}
                </Alert>
            )}
            <form onSubmit={handleSubmit}>
                <FormControl variant="outlined" fullWidth margin="normal">
                    <InputLabel htmlFor="calculator-input">Input</InputLabel>
                    <OutlinedInput
                        id="calculator-input"
                        value={content}
                        onChange={(event): void => {
                            setContent(event.target.value);
                        }}
                        endAdornment={
                            <InputAdornment position="end">
                                <Button color="primary" variant="contained" size="large" type="submit">
                                    =
                                </Button>
                            </InputAdornment>
                        }
                        labelWidth={40}
                    />
                </FormControl>
            </form>
            {result && (
                <Paper elevation={2} className={classes.result}>
                    <Typography variant="subtitle1"> = {result.toFixed(2)}</Typography>
                </Paper>
            )}
        </Paper>
    );
};
