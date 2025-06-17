import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="header">
      <Link to="/">
        <img className="header__logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo" />
      </Link>
      <input type="text" className="header__search" placeholder="Search" />
      <div className="header__nav">
        <Link to="/login">Sign In</Link>
        <Link to="/checkout">Cart</Link>
      </div>
    </nav>
  );
}

export default Header;
