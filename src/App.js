
import './App.css';
import Head from './components/Head';
import Home from './components/Home';
import Team from './components/Teams';
import Venue from './components/Venue';
import CreateTeam from './components/CreateTeam';
import YourTeam from './components/YourTeam';
import { Provider } from 'react-redux';
//import Cricketstore from './Redux/store';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { persistor, Cricketstore } from './Redux/store'
import { PersistGate } from 'redux-persist/integration/react';




function App() {
   
  return (

    <div>
       <Provider store={Cricketstore}>
       <PersistGate loading={null} persistor={persistor}>
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
        </PersistGate >
      </Provider>
      
    </div>
        
    
  );
}

export default App;
