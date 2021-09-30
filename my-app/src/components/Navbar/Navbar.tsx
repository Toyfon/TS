import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import React from "react";




const Navbar = (props:any) => {

    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" activeClassName={s.activeLink}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" activeClassName={s.activeLink}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/friends" activeClassName={s.activeLink}>Friends</NavLink>
            </div>


            <div className={s.settings}>
                <img src="https://img.icons8.com/offices/30/000000/settings.png"/>
                <NavLink to="/settings" activeClassName={s.activeLink}>Settings</NavLink>
            </div>


        </nav>
    )
}


export default Navbar