import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      <header>
        <img src="logo.jpg" alt="LMS Logo" style="width: 100px; height: 100px" />
        <h1>LMS - Learning Management System</h1>
      </header>

      <BrowserRouter>
      <Route path="/home" compoment={Home} />
      <Route path="/courses" compoment={Courses} />
      <Route path="/login" compoment={login} />
      
      </BrowserRouter>


    </div>
  );
}

export default App;
