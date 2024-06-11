
import Attendance from './pages/Attendance';
import Dancers from './pages/Dancers';
import Groups from './pages/Groups';
import Payments from './pages/Payments';
import Search from './pages/Search';
import Header from './shared/Header';
import "./styles/styles.css";
import { Route, Routes } from 'react-router';
import { useEffect, useState } from 'react';
import { db } from './firebaseConfig';
import { collection, getDocs, addDoc } from 'firebase/firestore';

interface Group {
  id: string;
  name: string;
  description: string;
}

const App: React.FC = () => {
  const [groups, setGroups] = useState<Group[]>([]);

  useEffect(() => {
    const fetchGroups = async () => {
      const querySnapshot = await getDocs(collection(db, 'groups'));
      const groupsList = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Group[];
      setGroups(groupsList);
    };

    fetchGroups();
  }, []);

  const addGroup = async () => {
    const docRef = await addDoc(collection(db, 'groups'), {
      name: 'New Group',
      description: 'Description of new group'
    });
    console.log("Document written with ID: ", docRef.id);
  };

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
        <div>
      <h1>Firestore Items</h1>
      <ul>
        {groups.map(group => (
          <li key={group.id}>{group.name}: {group.description}</li>
        ))}
      </ul>
      <button onClick={addGroup}>Add Group</button>
    </div>
    </>
  )
}

export default App
