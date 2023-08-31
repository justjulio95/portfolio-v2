import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className='div-border container d-flex flex-column flex-sm-column flex-md-row'>
      <h1 className='h1-border text-center'>Julio Suarez</h1>
      <nav className='nav-border d-flex mx-3 justify-content-between'>
        <h3 className='h3-border mx-3 mx-sm-3 mx-md-3'>Test</h3>
        <h3 className='h3-border mx-3 mx-sm-3 mx-md-3'>Test</h3>
        <h3 className='h3-border mx-3 mx-sm-3 mx-md-3'>Test</h3>
      </nav>
      <div className='div-border2 d-flex ms-2 justify-content-between'>
        <img className='' src='' alt='test' />
        <img src='' alt='test' />
        <img src='' alt='test' />
      </div>
    </div>
  );
}

export default App;
