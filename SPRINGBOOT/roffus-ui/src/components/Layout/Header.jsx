import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar/index';
import Avatar from '@material-ui/core/Avatar/index';
import Grid from '@material-ui/core/Grid/index';
import HelpIcon from '@material-ui/icons/Help';
import Hidden from '@material-ui/core/Hidden/index';
import IconButton from '@material-ui/core/IconButton/index';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Toolbar from '@material-ui/core/Toolbar/index';
import Tooltip from '@material-ui/core/Tooltip/index';
import Typography from '@material-ui/core/Typography/index';
import {withStyles} from '@material-ui/core/styles/index';

const lightColor = 'rgba(255, 255, 255, 0.7)';

const styles = theme => ({

    menuButton: {
        marginLeft: -theme.spacing.unit,
    },
    iconButtonAvatar: {
        padding: 4,
    },
    link: {
        textDecoration: 'none',
        color: lightColor,
        '&:hover': {
            color: theme.palette.common.white,
        },
    },
    button: {
        borderColor: lightColor,
    },
});

function Header(props) {
    const {classes, onDrawerToggle, headerTitle} = props;

    return (
        <React.Fragment>
            <AppBar color="primary" position="sticky" elevation={0}>
                <Toolbar>
                    <Grid container spacing={8} alignItems="center">
                        <Hidden smUp>
                            <Grid item>
                                <IconButton color="inherit" aria-label="Open drawer" onClick={onDrawerToggle}
                                            className={classes.menuButton}>
                                    <MenuIcon/>
                                </IconButton>
                            </Grid>
                        </Hidden>
                        <Grid item xs/>
                        {/*<Grid item>
                            <Typography className={classes.link} component="a" href="#">
                                Go to docs
                            </Typography>
                        </Grid>*/}
                        <Grid item>
                            <Tooltip title="Alerts • No alerts">
                                <IconButton color="inherit">
                                    <NotificationsIcon/>
                                </IconButton>
                            </Tooltip>
                        </Grid>
                        <Grid item>
                            <Tooltip title="Help">
                                <IconButton color="inherit">
                                    <HelpIcon/>
                                </IconButton>
                            </Tooltip>
                        </Grid>
                        <Grid item>
                            <IconButton color="inherit" className={classes.iconButtonAvatar}>
                                <Avatar className={classes.avatar} src="/static/images/avatar.jpeg"/>
                            </IconButton>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <AppBar component="div" className={classes.secondaryBar} color="primary" position="static" elevation={0}>
                <Toolbar>
                    <Grid container alignItems="center" spacing={8}>
                        <Grid item xs>
                            <Typography color="inherit" variant="h5">
                                {headerTitle}
                            </Typography>
                        </Grid>
                        {/* <Grid item>
                            <Button className={classes.button} variant="outlined" color="inherit" size="small">
                                Web setup
                            </Button>
                        </Grid>*/}
                    </Grid>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
    //onDrawerToggle: PropTypes.func.isRequired,
};

export default withStyles(styles)(Header);