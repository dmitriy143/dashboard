
import Header from './Containers/Header/Header';
import Tabs from './Containers/Tabs/Tabs';
import Footer from './Containers/Footer/Footer';
import Main from './Containers/Main/Main';
import './App.scss';


function App({ state }) {
  return (
    <div className="App">
      <Header />
      <Tabs />
      <Main state={state} />
      <Footer />
    </div>
  );
}

export default App;
