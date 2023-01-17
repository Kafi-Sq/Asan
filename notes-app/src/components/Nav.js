import { Link } from 'react-router-dom'
import classes from './Nav.module.css'

function Nav() {
    return (
        <div className={classes.header}>
            <p><Link to='/'>Home</Link></p>
            <p><Link to='/'>Prompts</Link></p>
            <p><Link to='/writing-page'>Write</Link></p>
        </div>
    )
}

export default Nav;