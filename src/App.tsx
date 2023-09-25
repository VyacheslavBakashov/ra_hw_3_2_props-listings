
import './App.css';

import './App.css';
import { Listing } from './components/Listings';
import DATA from './data/index.json';

const App: React.FC = () => {
  return <Listing items={DATA} />;
};

export default App;
