
import { Route, Routes } from 'react-router-dom';
import './App.css';
import VolunteerCards from './Component/Body/VolunteerCards/VolunteerCards';
import Header from './Component/Header/Header';
import Login from './Component/Login/Login/Login';
import Register from './Component/Login/Register/Register';
import Event from './Component/Body/Event/Event';
import AddEvent from './Component/Body/AddEvent/AddEvent';

function App() {
  return (
    <div className="">
     <Header></Header>
     <Routes>
       <Route path='/' element={<VolunteerCards></VolunteerCards>}></Route>
       <Route path='/home' element={<VolunteerCards></VolunteerCards>}></Route>
       <Route path='/event' element={<Event></Event>}></Route>
       <Route path='/add-event' element={<AddEvent></AddEvent>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>
       <Route path='/register' element={<Register></Register>}></Route>
       
     </Routes>
    </div>
  );
}

export default App;
