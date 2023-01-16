import { Link } from 'react-router-dom'
import classes from './Nav.module.css'

function Nav() {
    return (
        <header className={classes.navigation}>
            <p className={classes.mainLinks}><Link to='/'>All blogs</Link></p>
            <p className={classes.mainLinks}><Link to='/writing-page'>Create</Link></p>
            <div className={classes.divider}></div>
            <p>Tech</p>
            <p>Education</p>
            <p>News</p>
            <p>Personal</p>
            <p>General</p>
            <div className={classes.divider}></div>
            <input type="text" placeholder="search" />
            <i class="fa-solid fa-magnifying-glass"></i>
        </header>
    )
}

export default Nav;