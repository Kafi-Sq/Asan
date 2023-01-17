import classes from './NotesList.module.css'

function NotesList(props) {
    return (
        <section className={classes.Thissection}>
            {props.notesLoaded.map((note) => {
                return(
                    <div className={classes.card}>
                        <h2>{note.title}</h2>
                        <p>{note.body}</p>
                        <div className={classes.btnClass}>
                            <button>See More</button>
                        </div>
                    </div>
                )
            })}
        </section>
    )
}

export default NotesList