import logo from './logo.svg';
import './App.css';
import Create from './components/Create';
import { Routes,Route } from 'react-router-dom';
import Edit from './components/Edit';
import Read from './components/Read';

function App() {
  return (
    <div className="container">

    <Routes>
      <Route exact path="/" element={<Read/>} />
      <Route exact path="/edit" element ={<Edit/>}/>
      <Route exact path="/create" element ={<Create/>}/>

    </Routes>
    
    </div>
  );
}

export default App;
