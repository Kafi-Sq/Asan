import { useContext } from "react";
import classes from './Note.module.css'
import NotesContext from "../store/notes-context";

function Note(){
    const NotesCtx = useContext(NotesContext)
    const title = NotesCtx.note.at(-1).title
    const body = NotesCtx.note.at(-1).body
    return (
        <section className={classes.container}>
            <h2 className={classes.noteTitle}>{title}</h2>
            <p className={classes.noteBody}>{body}</p>
        </section>
    )
}

export default Note