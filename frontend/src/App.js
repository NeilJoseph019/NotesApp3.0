import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './component/Header';
import CreateNewNote from './pages/CreateNewNote';
import HomePage from './pages/HomePage';
import IndividualNotes from './pages/IndividualNotes';


function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/create-new-note' element={<CreateNewNote/>}/>
        <Route path='/note:1' element={<IndividualNotes/>}/>
      </Routes>
    </Router>
  );
}

export default App;
