import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import NotesContext from '../../store/notes-context'

import classes from './NotesList.module.css'

function NotesList(props) {
    const navigate = useNavigate()

    const NotesCtx = useContext(NotesContext)

    function toggleNote(note) {
        NotesCtx.addNote({
            id: note.id,
            title: note.title,
            body: note.body
        })
        navigate('/note')
    }

    return (
        <section className={classes.Thissection}>
            {props.notesLoaded.map((note) => {
                return (
                    <div className={classes.card}>
                        <div className={classes.bodyContent}>
                            <h2>{note.title}</h2>
                            <p>{note.body}</p>
                        </div>
                        <div className={classes.btnClass} onClick={() => toggleNote(note)}>
                            <button>See More</button>
                        </div>
                    </div>
                )
            })}
        </section>
    )
}

export default NotesList