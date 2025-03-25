import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to the home page</p>
      <h1>Welcome to the home page!</h1>
      <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <Link to='/'>Home</Link>
        <Link to='/About'>About Us</Link>
      </div>
    </div>
  );
}

export default Home;

