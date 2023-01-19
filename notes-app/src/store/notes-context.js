import { createContext, useState } from "react";

const NotesContext = createContext({
    note: [],
    addNote: (Note) => {}
})

export function NotesContextProvider(props) {
    const [userNote, setUserNote] = useState([])

    function addNoteHandler(Note) {
        setUserNote((prev) => {
            return prev.concat(Note)
        })
    }

    const context = {
        note: userNote,
        addNote: addNoteHandler
    }

    return <NotesContext.Provider value={context}>
        {props.children}
    </NotesContext.Provider>
}

export default NotesContext