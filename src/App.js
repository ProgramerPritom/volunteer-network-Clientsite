
import { Route, Routes } from 'react-router-dom';
import './App.css';
import VolunteerCards from './Component/Body/VolunteerCards/VolunteerCards';
import Header from './Component/Header/Header';
import Login from './Component/Login/Login/Login';

function App() {
  return (
    <div className="">
     <Header></Header>
     <Routes>
       <Route path='/' element={<VolunteerCards></VolunteerCards>}></Route>
       <Route path='/home' element={<VolunteerCards></VolunteerCards>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>
       
     </Routes>
    </div>
  );
}

export default App;
