import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {withStyles} from '@material-ui/core/styles/index';
import Divider from '@material-ui/core/Divider/index';
import Drawer from '@material-ui/core/Drawer/index';
import List from '@material-ui/core/List/index';
import ListItem from '@material-ui/core/ListItem/index';
import ListItemIcon from '@material-ui/core/ListItemIcon/index';
import ListItemText from '@material-ui/core/ListItemText/index';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import DnsRoundedIcon from '@material-ui/icons/DnsRounded';
import PublicIcon from '@material-ui/icons/Public';
import School from '@material-ui/icons/School';
import LocalAtm from '@material-ui/icons/LocalAtm';
import Assignment from '@material-ui/icons/Assignment';
import TimerIcon from '@material-ui/icons/Timer';

const categories = [
    {
        id: 'Muebles',
        children: [
            {id: 'Sala', url: '/students', icon: <PeopleIcon/>, active: true},
            {id: 'Comedor', url: '/instructors', icon: <School/>},
            {id: 'Dormitorio', url: '/materials', icon: <DnsRoundedIcon/>},
            {id: 'Patio', url: '/payments', icon: <LocalAtm/>},
        ],
    },

];

const subcategories = [
    {
        id: '',
        children: [
            {id: 'Estante', url: '/students', icon: <PeopleIcon/>, active: true},
            {id: 'sofa', url: '/instructors', icon: <School/>},
            {id: 'sillon', url: '/materials', icon: <DnsRoundedIcon/>},
            {id: 'librero', url: '/payments', icon: <LocalAtm/>},
        ],
    },

];

const styles = theme => ({
    categoryHeader: {
        paddingTop: 16,
        paddingBottom: 16,
    },
    categoryHeaderPrimary: {
        color: theme.palette.common.white,
    },
    item: {
        paddingTop: 4,
        paddingBottom: 4,
        color: 'rgba(255, 255, 255, 0.7)',
    },
    itemCategory: {
        backgroundColor: '#232f3e',
        boxShadow: '0 -1px 0 #404854 inset',
        paddingTop: 16,
        paddingBottom: 16,
    },
    firebase: {
        fontSize: 24,
        fontFamily: theme.typography.fontFamily,
        color: theme.palette.common.white,
    },
    itemActionable: {
        '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
        },
    },
    itemActiveItem: {
        color: '#4fc3f7',
    },
    itemPrimary: {
        color: 'inherit',
        fontSize: theme.typography.fontSize,
        '&$textDense': {
            fontSize: theme.typography.fontSize,
        },
    },
    textDense: {},
    divider: {
        marginTop: theme.spacing.unit * 2,
    },
});

function logItem(arg){
    console.log(arg);
}


function Navigator(props) {
    const {classes, ...other} = props;

    const tipo=categories;

    return (
        <Drawer variant="permanent" {...other}>
            <List disablePadding>
                <ListItem className={classNames(classes.firebase, classes.item, classes.itemCategory)}>
                   Roffus Design Room
                </ListItem>
                <ListItem className={classNames(classes.item, classes.itemCategory)}>
                    <ListItemIcon>
                        <HomeIcon/>
                    </ListItemIcon>
                    <ListItemText
                        classes={{
                            primary: classes.itemPrimary,
                        }}
                    >
                       Inicio
                    </ListItemText>
                </ListItem>
                {tipo.map(({id, children}) => (
                    <React.Fragment key={id}>
                        <ListItem className={classes.categoryHeader}>
                            <ListItemText
                                classes={{
                                    primary: classes.categoryHeaderPrimary,
                                }}
                            >
                                {id}
                            </ListItemText>
                        </ListItem>
                        {children.map(({id: childId, url, icon, active}) => (
                            <ListItem
                                button
                                dense
                                key={childId}
                                onClick={logItem.bind(this, url)}
                                className={classNames(
                                    classes.item,
                                    classes.itemActionable,
                                    active && classes.itemActiveItem,
                                )}
                            >
                                <ListItemIcon>{icon}</ListItemIcon>
                                <ListItemText
                                    classes={{
                                        primary: classes.itemPrimary,
                                        textDense: classes.textDense,
                                    }}
                                >
                                    {childId}
                                </ListItemText>
                            </ListItem>

                        ))}
                        <Divider className={classes.divider}/>
                    </React.Fragment>
                ))}
            </List>
////////////////////////////////////////////////////////////////////////////////////////////
        </Drawer>

    );
}

Navigator.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navigator);
