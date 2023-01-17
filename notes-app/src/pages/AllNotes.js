import { useState, useEffect } from 'react'
import NotesList from '../components/notes/NotesList'

function AllNotes() {
    const [isLoading, setLoading] = useState(true)
    const [loadedNotes, setLoadedNotes] = useState([])

    useEffect(() => {
        setLoading(true)
        fetch('https://notesdata-8fe67-default-rtdb.firebaseio.com/notes.json'
        ).then(res => {
            return res.json();
        }).then(data => {
            const notes = []

            for(const key in data){
                const note = {
                    id: key,
                    ...data[key]
                }
                notes.push(note)
            }
            
            setLoading(false)
            setLoadedNotes(notes)
        })
    }, [])

    if (isLoading) {
        return <section>
            <p>Loading...</p>
        </section>
    }

    return (
        <NotesList notesLoaded={loadedNotes} />
    )
}

export default AllNotes;