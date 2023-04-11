import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import cards from './components/main';
console.log(cards);
function App() {
  return (
    <div className="App">
      <Header />
      <div className='cards'>
        {cards}
      </div>
      <Footer />
    </div>
  );
}

export default App;
