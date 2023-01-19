import { Route, Routes } from 'react-router-dom'

import Layout from "./components/Layout";

import AllNotes from './pages/AllNotes';
import Note from './pages/Note';
import WritingPage from './pages/WritingPage';

function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<AllNotes />} />
                <Route path="/writing-page" element={<WritingPage />} />
                <Route path="/note" element={<Note />} />
            </Routes>
        </Layout>
    )
}

export default App;
