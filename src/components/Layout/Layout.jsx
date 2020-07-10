import React, { Component } from 'react';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideMenu from '../Navigation/SideMenu/SideMenu';


class Layout extends Component {
    state = {
        showSideMenu: false
    }

    sideMenuClose = () => {
        this.setState({ showSideMenu: false })
    }

    sideMenuToggleHandler = () => {
        this.setState((prevState) => {
            return { showSideMenu: !prevState.showSideMenu };
        });
    }

    render() {
        return (
            <>
                <Toolbar
                    menuToggleClicked={this.sideMenuToggleHandler}
                />
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
