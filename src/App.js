import './App.css';
import smile from './img/nev_22934_z.png'
import { getDatabase, ref, set } from "firebase/database";


function App() {
  const db = getDatabase();
  function form() {
    document.getElementById('smile').className = 'smile active'
    setTimeout(() => {
      document.getElementById('smile').className = 'smile'
    }, 200);
    set(ref(db, 'state/'), {state: true});
  }
  return (
    <div className="App">
      <div className='text'>Включить мояк</div>
      <div className='center'>
        <img id='smile' onClick={form} className='smile' src={smile} />
      </div>
    </div>
  );
}

export default App;
