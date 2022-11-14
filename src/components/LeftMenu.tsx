import React from 'react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import DeleteIcon from '@mui/icons-material/Delete';
import CachedIcon from '@mui/icons-material/Cached';
import { makeStyles, Drawer, IconButton, Divider, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { useDispatch } from 'react-redux';
import { resetState } from '../state/actions';

const useStyles = makeStyles(theme => ({
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
}));

const reloadServiceWorker = (): void => {
    navigator.serviceWorker.getRegistration().then(function(reg) {
        if (reg) {
            reg.unregister().then(function() {
                window.location.reload();
            });
        } else {
            window.location.reload();
        }
    });
};

export const LeftMenu: React.FC<{ open: boolean; closeCallback(): void }> = ({ open, closeCallback }) => {
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
                <ListItem button onClick={reloadServiceWorker}>
                    <ListItemIcon>
                        <CachedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Update and reload" />
                </ListItem>
            </List>
        </Drawer>
    );
};
