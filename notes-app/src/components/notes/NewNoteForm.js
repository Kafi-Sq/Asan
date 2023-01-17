import { useRef } from 'react'

import classes from './NewNoteForm.module.css'

function NewNoteForm(props) {
    const titleInput = useRef()
    const bodyText = useRef()
    
    function SubmitHandler(event){
        event.preventDefault()

        const enteredTitle = titleInput.current.value
        const enteredText = bodyText.current.value

        const NoteData = {
            title: enteredTitle,
            body: enteredText
        }

        props.OnAddNote(NoteData)
    }

    return (
        <form onSubmit={SubmitHandler}>
            <div className={classes.control}>
                <input type='text' required id='title' placeholder='Title' ref={titleInput}/>
            </div>
            <div>
                <textarea ref={bodyText}/>
            </div>
            <div className={classes.btnDiv}>
                <button>Submit</button>
            </div>
        </form>
    )
}

export default NewNoteForm;