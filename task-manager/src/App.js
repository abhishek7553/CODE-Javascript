import './App.css';
import Content from './Components/Content/Content';

import Header from './Components/Header/Header'

function App() {
  return (
    <div className="App">
      <Header />
      <p className='app__invoice'>Invoice List</p>
      <Content />
    </div>
  );
}

export default App;
