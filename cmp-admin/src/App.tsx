
import Attendance from './pages/Attendance';
import Dancers from './pages/Dancers';
import Groups from './pages/Groups';
import Payments from './pages/Payments';
import Search from './pages/Search';
import Header from './shared/Header';
import "./styles/styles.css";
import { Route, Routes } from 'react-router';

function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route path='Consultas' element={<Search />}></Route>
        <Route path='Grupos' element={<Groups />}></Route>
        <Route path='Bailarinas' element={<Dancers />}></Route>
        <Route path='Pagos' element={<Payments />}></Route>
        <Route path='Asistencias' element={<Attendance />}></Route>
      </Routes>
    </>
  )
}

export default App
