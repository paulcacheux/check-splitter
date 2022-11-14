import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Container, Grid, CssBaseline } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { CheckTable } from './components/CheckTable';
import { AddName } from './components/AddName';
import { AddExpense } from './components/AddExpense';
import { LeftMenu } from './components/LeftMenu';
import { ExpenseHistory } from './components/ExpenseHistory';
import { Calculator } from './components/Calculator';

const App: React.FC = () => {
    const [isMenuOpened, setMenuOpened] = useState(false);

    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar position="sticky">
                <Toolbar>
                    <IconButton
                        edge="start"
                        sx={{ marginRight: 2 }}
                        color="inherit"
                        aria-label="menu"
                        onClick={(): void => setMenuOpened(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" sx={{flexGrow: 1}}>
                        Check Splitter
                    </Typography>
                </Toolbar>
            </AppBar>
            <LeftMenu open={isMenuOpened} closeCallback={(): void => setMenuOpened(false)} />
            <Container fixed sx={{marginTop: 2, marginBottom: 2}}>
                <CheckTable />
                <Grid container spacing={3}>
                    <Grid item sm={12} md={4}>
                        <AddName />
                    </Grid>
                    <Grid item sm={12} md={8}>
                        <AddExpense />
                    </Grid>
                </Grid>
                <Calculator />
                <ExpenseHistory />
            </Container>
        </React.Fragment>
    );
};

export default App;
