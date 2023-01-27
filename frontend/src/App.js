import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './component/Header';
import HomePage from './pages/HomePage';
import IndividualNotes from './pages/IndividualNotes';


function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/note:1' element={<IndividualNotes/>}/>

      </Routes>
    </Router>
  );
}

export default App;
