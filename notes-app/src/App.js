import { Route, Routes } from 'react-router-dom'

import Layout from "./components/Layout";

import AllNotes from './pages/AllNotes';
import WritingPage from './pages/WritingPage';

function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<AllNotes />} />
                <Route path="/writing-page" element={<WritingPage />} />
            </Routes>
        </Layout>
    )
}

export default App;
