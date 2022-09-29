import { Cartao } from './componentes/Cartao';

import './App.css';
import { Header } from './componentes/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Cartao
        foto="https://randomuser.me/api/portraits/men/51.jpg"
        nome="Dustin Fletcher"
        email="dustin.fletcher@example.com"
      />
      <Cartao
        foto="https://randomuser.me/api/portraits/women/61.jpg"
        nome="Dora Ford"
        email="dora.ford@example.com"
      />
      <Cartao
        foto="https://randomuser.me/api/portraits/women/29.jpg"
        nome="Allison Mitchell"
        email="allison.mitchell@example.com"
      />
    </div>
  );
}

export default App;
