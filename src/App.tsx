import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Container,
    Grid,
    Drawer,
    CssBaseline,
    Divider,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import { CheckTable } from './CheckTable';
import { AddName } from './AddName';
import { AddExpense } from './AddExpense';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import DeleteIcon from '@material-ui/icons/Delete';
import { resetState } from './state/actions';

const useStyles = makeStyles(theme => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },

    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
}));

const LeftMenu: React.FC<{ open: boolean; closeCallback(): void }> = ({ open, closeCallback }) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleReset = (): void => {
        dispatch(resetState());
        closeCallback();
    };

    return (
        <Drawer open={open}>
            <div className={classes.drawerHeader}>
                <IconButton onClick={closeCallback}>
                    <ChevronLeftIcon />
                </IconButton>
            </div>
            <Divider />
            <List>
                <ListItem button onClick={handleReset}>
                    <ListItemIcon>
                        <DeleteIcon />
                    </ListItemIcon>
                    <ListItemText primary="Reset" />
                </ListItem>
            </List>
        </Drawer>
    );
};

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
