import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import { AppRouter } from './routes/AppRouter';

function App() {
  return (
    <BrowserRouter>
    <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
