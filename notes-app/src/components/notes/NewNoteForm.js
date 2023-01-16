import classes from './NewNoteForm.module.css'

function NewNoteForm() {
    return (
        <form>
            <div className={classes.control}>
                <input type='text' required id='title' placeholder='Title' />
            </div>
            <div>
                <textarea />
            </div>
            <div className={classes.btnDiv}>
                <button>Submit</button>
            </div>
        </form>
    )
}

export default NewNoteForm;