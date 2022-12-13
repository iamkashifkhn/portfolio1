import './App.css';
import {Navbar} from './components'
import {Header, Projects, About, Contacts} from './container'

function App() {
  return (
    <div className="App">
        <div>
          <Navbar/>
        </div>
        <Header/>
        <Projects/>
        <About/>
        <Contacts/>
    </div>
  );
}

export default App;
