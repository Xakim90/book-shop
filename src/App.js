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
        <div className="col-span-12 px-2">
          <Content />
        </div>
<<<<<<< HEAD
      </div>
      <div className="col-span-12">
        <Footer />
=======
        <div className="col-span-12 ">
          <Footer />
        </div>
>>>>>>> e916ee8753cfe191afcbbcca326410793aa30c2e
      </div>
    </div>
  );
}

export default App;
