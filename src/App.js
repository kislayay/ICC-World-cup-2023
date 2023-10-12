
import './App.css';
import Head from './components/Head';
import Home from './components/Home';
import Team from './components/Teams';
import Venue from './components/Venue';
import CreateTeam from './components/CreateTeam';
import YourTeam from './components/YourTeam';

import { BrowserRouter,Routes,Route } from 'react-router-dom';



function App() {
   
  return (
    <div>

      <BrowserRouter>
        <Head />
       
        <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/team" element={<Team />} />
            <Route path="/venue" element={<Venue />} />
            <Route path="/createteam" element={<CreateTeam />} />
            <Route path="/yourteam" element={<YourTeam />} />
            
        </Routes>
      </BrowserRouter>
      
    </div>
        
    
  );
}

export default App;
