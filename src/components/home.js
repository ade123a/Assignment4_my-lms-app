import { Link } from 'react-router-dom';

function home() {
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to the home page</p>
      <h1>Welcome to the home page!</h1>
      <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <a href='/'> Home </a>
        <a href='/login'> Login </a>
        <a href='/Courses'> Courses </a>
      </div>
    </div>
  );
}

export default home;

