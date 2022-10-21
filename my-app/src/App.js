import './App.css';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <div >
      <Header/>
      <h1>This is much harder than it looks</h1>
      <p>This is starting to get fun </p>
      {console.log('Very top secret hidden message')}
      <Footer/>
    </div>
  );
}

export default App;
