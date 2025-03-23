import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './header/home';
import Courses from './header/Courses';
import Login from './header/Login';
function Header() {
  return (
    <BrowserRouter>
        <Routes style={{display: 'flex', justifyContent: 'space-around'}}>
          <Route path="/header/home" compoment={Home} />
          <Route path="/header/courses" compoment={Courses} />
          <Route path="/header/login" compoment={Login} />
        </Routes>
      </BrowserRouter>

  );
}

export default Header;