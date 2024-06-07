
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
        <Route path='Consultas' Component={Search}></Route>
        <Route path='Grupos' Component={Groups}></Route>
        <Route path='Bailarinas' Component={Dancers}></Route>
        <Route path='Pagos' Component={Payments}></Route>
        <Route path='Asistencias' Component={Attendance}></Route>
      </Routes>
    </>
  )
}

export default App
