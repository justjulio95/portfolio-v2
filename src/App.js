import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import Header from './components/header/header.component';
import About from './components/about/about.component';

function App() {
    return(
      <div className='App'>
        <Header/>
        <About/>
      </div>
    )
}

export default App;
