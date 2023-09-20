import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import Header from './components/header/header.component';
import About from './components/about/about.component';
import Projects from './components/projects/projects.component';
import ContactForm from './components/contact/contact.component';

function App() {
    return(
      <div className='App'>
        <Header/>
        <About/>
        <Projects/>
        <ContactForm/>
      </div>
    )
}

export default App;
