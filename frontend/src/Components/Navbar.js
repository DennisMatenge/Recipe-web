import { useCookies } from 'react-cookie';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [cookies, setCookies] = useCookies(['access_token']);

  return (
    <div className='navbar'>
      <Link to="/">Home</Link>
      <Link to="/create-recipe">Create Recipe</Link>
      <Link to="/saved-recipe">Saved Recipe</Link>
      {!cookies.access_token ? (
        <>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
        </>
      ) : (
        <button>Logout</button>
      )}
    </div>
  );
}

export default Navbar;
