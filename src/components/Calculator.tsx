import React, { useState } from 'react';
import {
    Alert,
    Paper,
    Typography,
    Button,
    FormControl,
    InputLabel,
    OutlinedInput,
    InputAdornment,
} from '@mui/material';
import DialPadIcon from '@mui/icons-material/Dialpad';
import { evaluate } from '../maths/parser';

export const Calculator: React.FC = () => {
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
        <Paper sx={{marginTop: 2, padding: 2}} elevation={3}>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <DialPadIcon fontSize="large" sx={{marginRight: 1}} />
                <Typography variant="h5">Calculator</Typography>
            </div>
            {error && (
                <Alert severity="error" sx={{marginTop: 1}}>
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
                <Paper elevation={2} sx={{padding: 1, backgroundColor: '#f5f5f5'}}>
                    <Typography variant="subtitle1"> = {result.toFixed(2)}</Typography>
                </Paper>
            )}
        </Paper>
    );
};
