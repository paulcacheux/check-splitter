import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Container, Grid } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import { CheckTable } from './CheckTable';
import { AddName } from './AddName';
import { AddExpense } from './AddExpense';

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

    return (
        <React.Fragment>
            <AppBar position="sticky">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Check Splitter
                    </Typography>
                </Toolbar>
            </AppBar>
            <Container fixed>
                <CheckTable />
                <Grid container spacing={3}>
                    <Grid item xs={4}>
                        <AddName />
                    </Grid>
                    <Grid item xs={8}>
                        <AddExpense />
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    );
};

export default App;
