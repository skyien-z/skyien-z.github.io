import { Outlet, Link } from 'react-router-dom';
import './App.css';

function HeaderBar() {
  return (
    <nav className='header-bar'>
      <ul>
        <li>
          <Link to={'/'}> Home </Link>
        </li>
        <li>
          <Link to={`/about`}> About </Link>
        </li>
        <li>
          <Link to={'/recipes'}> Recipes </Link>
        </li>
        <li className='last-link'>
          <Link to={'/contact'}> Contact </Link>
        </li>
      </ul>
    </nav>
  )
}

function App() {
  return (
    <div className="App">
      <HeaderBar/>
      <Outlet/>
    </div>
  );
}

export default App;
