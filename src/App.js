import './App.css';
import Header from './Layout/Header';
import Sidebar from './Layout/Sidebar';
import Content from './Layout/Content';

function App() {
  return (
    <div className="app">
      <div className="grid grid-cols-12">
        <div className="col-span-12">
          <div className="h-64">
            <Header />
          </div>
          <div className="px-3">
            <Content />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
