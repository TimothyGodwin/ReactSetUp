import './App.scss';
import { BrowserRouter } from "react-router-dom";
import Footer from './layouts/Footer/Footer';
import Header from './layouts/Header/Header';
import LoginForm from './pages/login/Login';
import AppRouter from './routes/AppRouter';
import { useApi } from './services/axios/useApi';
import Home from './pages/Home/Home';

function App() {


  return (
    <div className="App">

      <BrowserRouter>
      <Header />
      <AppRouter />
      <Footer /> 
      </BrowserRouter>
      
    </div>
  );
}

export default App;
