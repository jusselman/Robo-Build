import React, { Component } from 'react';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideMenu from '../Navigation/SideMenu/SideMenu';


class Layout extends Component {
    state = {
        showSideMenu: false
    }

    sideMenuClose = () => {
        console.log('sideMenuClose function')
        this.setState({ showSideMenu: false })
    }

    render() {
        return (
            <>
                <Toolbar />
                <SideMenu
                    open={this.state.showSideMenu}
                    close={this.sideMenuClose}
                />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </>
        )
    }

}

export default Layout;
