import './App.css';
import {Navbar, Skills, Footer} from './components'
import {Header, Services, Projects, About, Contacts} from './container'
import { FloatButton } from 'antd';

function App() {
  return (
    <div className="App">
        <div>
          <Navbar/>
        </div>
        <Header/>
        <About/>
        <Services/>
        <Skills/>
        <Projects/>
        <Contacts/>
        <Footer/>
        <FloatButton.BackTop />
    </div>
  );
}

export default App;
