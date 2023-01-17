import { json, useNavigate } from 'react-router-dom'
import NewNoteForm from "../components/notes/NewNoteForm";

function WritingPage() {
    const navigate = useNavigate()

    function addNote(NoteData) {
        fetch(
            'https://notesdata-8fe67-default-rtdb.firebaseio.com/notes.json',
            {
                method: 'POST',
                body: JSON.stringify(NoteData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(() => {
            navigate('/', {replace: true})
        })
    }
    return (
        <section>
            <NewNoteForm OnAddNote={addNote}/>
        </section>
    )
}

export default WritingPage;