import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav>
      <h1>Henry Dogs</h1>
      <ul>
        <li><Link to="/">Landing</Link></li>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/create">Create</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/detail">Detail</Link></li>
        <li><Link to="/sdfasd">NotFound</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
