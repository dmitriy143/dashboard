
import Header from './Containers/Header/Header';
import Tabs from './Containers/Tabs/Tabs';
import Footer from './Containers/Footer/Footer';
import Main from './Containers/Main/Main';
import './App.scss';


function App() {
  return (
    <div className="App">
      <Header />
      <Tabs />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
