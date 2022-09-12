import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Score from './components/Score';

const App = () => {
  return (
    <div 
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        border: "5px solid red",
      }}  
    >
      <Header />
      <Main />
      <Score />
    </div>
  );
}

export default App;
