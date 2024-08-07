import css from './App.module.css';
import NavBar from './components/NavBar';


function App() {
  return (
    <div className={css.App}>
      {/* Add your components here */}
      <h1>My Gallery</h1>
      <NavBar />
    </div>
  );
}

export default App;