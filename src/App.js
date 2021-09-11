import './App.css';
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import Content from './Layout/Content';

function App() {
  return (
    <div className="App">
      <div className="grid grid-cols-12">
        <div className="col-span-12">
          <Header />
        </div>
        <div className="content col-span-12 px-2">
          <Content />
        </div>
        <div className="content col-span-12 ">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
