import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Container, Grid, CssBaseline } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import { CheckTable } from './CheckTable';
import { AddName } from './AddName';
import { AddExpense } from './AddExpense';
import { LeftMenu } from './components/LeftMenu';
import { ExpenseHistory } from './components/ExpenseHistory';

const useStyles = makeStyles(theme => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const App: React.FC = () => {
    const classes = useStyles();

    const [isMenuOpened, setMenuOpened] = useState(false);

    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar position="sticky">
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu"
                        onClick={(): void => setMenuOpened(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Check Splitter
                    </Typography>
                </Toolbar>
            </AppBar>
            <LeftMenu open={isMenuOpened} closeCallback={(): void => setMenuOpened(false)} />
            <Container fixed>
                <CheckTable />
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={4}>
                        <AddName />
                    </Grid>
                    <Grid item xs={12} sm={8}>
                        <AddExpense />
                    </Grid>
                </Grid>
                <ExpenseHistory />
            </Container>
        </React.Fragment>
    );
};

export default App;
