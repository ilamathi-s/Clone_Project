
import Nav from './nav'
import Homepage from './homepage'
import Certify from './certifipage'
import SpanPage from './spanpage'
import Abroadpage from './Abroadpage';
import UniversityPage from './UniversityPage';
import Refer from './refer'
import Footer from './footer'
import Login from './login'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <Router>
        <Routes>
          <Route path='*' element={
            <>
              <Nav/>
              <Homepage/>
              <Certify/>
              <SpanPage/>
              <Abroadpage/>
              <UniversityPage/>
              <Refer/>
              <Footer/>
            </> }/>
          <Route path="/login" element={<Login />} />
        </Routes>
     </Router>

  );
}

export default App;
